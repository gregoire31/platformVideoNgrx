const app = require('express')();
const mongoose = require('mongoose');
const consul = require('consul')({
  host: 'consul',
  promisify: true
});
var ObjectId = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors({
  origin: "*"
}))

const {
  findAllUsers,
  findUserById,
  addNewUser
} = require('./repository/user');


const port = process.env.PORT || 3000;

mongoose.connect('mongodb://mongo:27017/users', {useNewUrlParser: true, useUnifiedTopology: true});

consul.agent.service.register({
  name: 'service-authentification',
  address: process.env.SERVICE_ADDRESS,
  id: process.env.SERVICE_ADDRESS,
  port: port
}, (err) => {
  if (err) throw err;

  console.log('Registered to consul');
});

app.get('/testUsers', async (_, res) => {
  // const result = await consul.status.peers();
  const getUserList = await findAllUsers(true)

  res.json(getUserList);
});

app.get('/users', async (_, res) => {
  // const result = await consul.status.peers();
  const getUserList = await findAllUsers(true)

  res.json(getUserList);
});

app.get('/users/:id', async (req, res) => {
  const id = req.params.id
  // const result = await consul.status.peers();
  const getUserList = await findUserById(id,true)
  res.json({...getUserList});
});

app.post('/users', async(req,res) => {
  const { body } = req;
  const { username } = body;
  const { password } = body;
  let userToAdd = {}
  let getUserList = await findAllUsers(true)
  
  let verificationUsernamePresentInbase = false
  
  getUserList.forEach(userData => {
    if(userData.username === username){
      verificationUsernamePresentInbase = true
    }
  })
  if(!verificationUsernamePresentInbase){
    userToAdd = {
      _id : ObjectId(),
      username,
      password
    }
    
    let getNewUser = await addNewUser(userToAdd)
    res.json(getNewUser)
  }else{
    res.send(getUserList)
  }

})

app.post('/user/login', async(req, res, next) => {
  
  let user = {}
  const { body } = req;
  const { username } = body;
  const { password } = body;
  const getUserList = await findAllUsers(true)
  
  let verificationInformations = false
  getUserList.forEach(userData => {
    
    if(userData.username === username && userData.password === password){
      verificationInformations = true
      user = userData
    }
  });
  
  //checking to make sure the user entered the correct username/password combo
  if(verificationInformations) { 
      //if user log in success, generate a JWT token for the user with a secret key
      jwt.sign({user}, process.env.SECRETTOKEN, { expiresIn: '1h' },(err, token) => {        
          if(err) { console.log(err) }
          res.send([{token, user}])
      });
  } else {
      console.log('ERROR: Could not log in');
      res.send([{token : false}, {user: 0}])
  }
})

app.post('/verifyToken', (req,res) => {
  jwt.verify(req.body.token, process.env.SECRETTOKEN, (err) => {
    
      if(err){
          //If error send Forbidden (403)
          console.log('ERROR: Could not connect to the protected route');
          res.send([{response : false}]);
      } else {
          res.send([{response : true}])
      }
  })
})

async function checkToken(req, res) {
  const header = req.headers['authorization'];
  const getUserList = await findAllUsers(true)
  if(typeof header !== 'undefined') {
      const bearer = header.split(' ');
      const token = bearer[1];

      jwt.verify(token, process.env.SECRETTOKEN, (err, authorizedData) => {
          if(err){
              //If error send Forbidden (403)
              console.log('ERROR: Could not connect to the protected route');
              res.sendStatus(403);
          } else {
              
              res.send({getUserList})
          }
      })
  } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403)
  }
}

app.listen(port, () => {
  console.log(`authentification service listening on port ${port}`);
});


module.exports = app;