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
  addComment,
  findCommentById,
  createComment
} = require('./repository/comment')

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://mongo:27017/comments', {useNewUrlParser: true, useUnifiedTopology: true});

consul.agent.service.register({
  name: 'service-comment',
  address: process.env.SERVICE_ADDRESS,
  id: process.env.SERVICE_ADDRESS,
  port: port
}, (err) => {
  if (err) throw err;

  console.log('Registered to consul');
});


app.get('/comment/:id', async (req,response) => {
  const getCommentList = await findCommentById(req.params.id,true)

    response.json(getCommentList)
    
})


  app.post('/comment', async (req,response) => {
    const { body } = req;
    const { idFilm } = body;
    const { idUser } = body;
    const { message } = body;
    const { dateCreated } = body
    let comment = {
      userId: idUser,
      message : message,
      dateCreated: dateCreated
    }
    let getCommentList = await findCommentById(idFilm,true)
    if(getCommentList === null){
      getCommentList = await createComment(idFilm,comment)
      getCommentList = getCommentList[0]

      response.send(getCommentList)

    }else{

      getCommentList.comments.push(comment)
      await addComment(getCommentList)
      response.send(comment)
    }
    })
  

app.listen(port, () => {
  console.log(`Comment service listening on port ${port}`);
});

module.exports = app;