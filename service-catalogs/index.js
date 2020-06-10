const app = require('express')();
const mongoose = require('mongoose');
const consul = require('consul')({
  host: 'consul',
  promisify: true
});
const cors = require('cors')

app.use(cors({
  origin: "*"
}))

const {
  findAllFilms,
  findFilmById
} = require('./repository/film');


const port = process.env.PORT || 3000;

mongoose.connect('mongodb://mongo:27017/films', {useNewUrlParser: true, useUnifiedTopology: true});

consul.agent.service.register({
  name: 'service-catalogs',
  address: process.env.SERVICE_ADDRESS,
  id: process.env.SERVICE_ADDRESS,
  port: port
}, (err) => {
  if (err) throw err;

  console.log('Registered to consul');
});

app.get('/catalogs', async (_, res) => {
  const getfilmList = await findAllFilms(true)

  res.json(getfilmList);
});

app.get('/catalog/:id', async (req, res) => {
  const id = req.params.id
  const getfilmList = await findFilmById(id,true)
  
  res.json(getfilmList);
});

app.listen(port, () => {
  console.log(`Catalogs service listening on port ${port}`);
});

module.exports = app;