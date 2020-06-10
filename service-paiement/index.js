const app = require('express')();
const cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors({
  origin: "*"
}))

const consul = require('consul')({
  host: 'consul',
  promisify: true
});

const {
  checkInformationsCard,
} = require('./repository/checkInformationCard')

const port = process.env.PORT || 3000;


consul.agent.service.register({
  name: 'service-paiement',
  address: process.env.SERVICE_ADDRESS,
  id: process.env.SERVICE_ADDRESS,
  port: port
}, (err) => {
  if (err) throw err;
  console.log('Registered to consul');
});

app.post('/payment', (req,res) => {
  if(req.body.cardNumber[0] === null || req.body.cardNumber[1] === null || req.body.cardNumber[2] === null){
    res.json({verification : false})
  }else{
    const verification = checkInformationsCard(req.body.cardNumber)
    res.json({verification : verification})
  }
})

app.listen(port, () => {
  console.log(`paiement service listening on port ${port}`);
});

module.exports = app;