const app = require('express')();
var bodyParser = require('body-parser')
const axios = require('axios').default;
const mongoose = require('mongoose');
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const consul = require('consul')({
  host: 'consul',
  promisify: true
});

app.use(cors({
  origin: "*"
}))

const {
  findDetailById,
  updateDetailUserPayed
} = require('./repository/detail')

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://mongo:27017/details', {useNewUrlParser: true, useUnifiedTopology: true});

consul.agent.service.register({
  name: 'service-detail',
  address: process.env.SERVICE_ADDRESS,
  id: process.env.SERVICE_ADDRESS,
  port: port
}, (err) => {
  if (err) throw err;

  console.log('Registered to consul');
});

consul.query.create({
  name: 'service-catalogs',
  service: {
    service: 'service-catalogs',
    onlypassing: true
  }
});

// app.get('/detail/:id', async (req, res) => {
//   const id = req.params.id
//   // const result = await consul.status.peers();
//   const getReservation = await findDetailById(id,true)
  
//   res.json(getReservation);
// });

// app.get('/reservations', async (_, res) => {
//   // const result = await consul.status.peers();
//   const getReservationList = await findAllReservations(true)

//   res.json(getReservationList);
// });

app.get('/detail/:id', async (req,response) => {
  const getDetailFilm = await findDetailById(req.params.id,true)
  const catalogServices = await consul.query.execute('service-catalogs');
  const catalogService = catalogServices.Nodes[0]
  let movieDetail = {}
  await axios({
    method: 'get',
    url: `http://${catalogService.Service.Address}:${catalogService.Service.Port}/catalog/${req.params.id}`
  }).then(function (data) {
    movieDetail = {...data.data, ...getDetailFilm}
    })
    response.json(movieDetail)
  })

app.post('/addFilmPayedUser', async(req,response) => {
  
  const { body } = req;
  const { idFilm } = body;
  const { idUser } = body;
  const { dateCreated } = body
  
  let newUserPayed = {
    userId: idUser,
    dateCreated: dateCreated
  }

  const getFilmDetail = await findDetailById(idFilm,true)
  let userPresentInBase = false
  getFilmDetail.usersPayed.forEach(user => {
    if(user.userId === idUser){
      user.dateCreated = dateCreated
      userPresentInBase = true
    }
  });
  if(!userPresentInBase){
    getFilmDetail.usersPayed.push(newUserPayed)
  }
  await updateDetailUserPayed(getFilmDetail)
  
  response.send(getFilmDetail)
})

app.listen(port, () => {
  console.log(`Detail service listening on port ${port}`);
});

module.exports = app;