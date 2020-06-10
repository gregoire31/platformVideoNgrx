
const chai = require('chai');
const mongoose = require('mongoose');
const expect = chai.expect;

const detailRepo = require('../repository/detail');
const detail = require('./mocks/detail.json')
const newUserPayed = require('./mocks/newUserPayed.json')
const detailUpdated = require('./mocks/detail_updated.json')

before(() => {
  mongoose.connect('mongodb://mongo:27017/details', {useNewUrlParser: true, useUnifiedTopology: true});
});

after(() => {
  mongoose.connection.close();
});

describe('detail list', () => {
  it('should return the list of details', async () => {
    const response = await detailRepo.findDetailById(detail._id,true);
    expect(response).to.be.deep.equal(detail);
  });
  it('should add an user payment to a detail movie', async () => {
  
    let newUserPayedData = {
      userId: newUserPayed.userId,
      dateCreated: newUserPayed.dateCreated
    }
  
    let getFilmDetail = await detailRepo.findDetailById(newUserPayed._id,true)
    // let userPresentInBase = false
    // getFilmDetail.usersPayed.forEach(user => {
    //   if(user.userId === idUser){
    //     user.dateCreated = dateCreated
    //     userPresentInBase = true
    //   }
    // });
    // if(!userPresentInBase){
      getFilmDetail.usersPayed.push(newUserPayedData)
    // }
    await detailRepo.addUserPayed(getFilmDetail)


    let response = await detailRepo.findDetailById(newUserPayed._id,true);
    expect(response).to.be.deep.equal(detailUpdated);
  });
  it('should reset database as initialisation', async() => {
    let response = await detailRepo.addUserPayed(detail,true)
    expect(detail).to.be.deep.equal(detail);
  })
});
