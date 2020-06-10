// const sinon = require('sinon');
const chai = require('chai');
const mongoose = require('mongoose');
// const request = require('request-promise');
const expect = chai.expect;

const userRepo = require('../repository/user');
const listUsers = require('./mocks/user_list.json')
const user = require('./mocks/user.json')
const userToAdd = require('./mocks/userToAdd.json')
const listUserUpdated = require('./mocks/user_list_updated.json')
// const movie = require('./mocks/movie.json')
before(() => {
  mongoose.connect('mongodb://mongo:27017/users', {useNewUrlParser: true, useUnifiedTopology: true});
});

after(() => {
  mongoose.connection.close();
});

describe('user', () => {
  it('should return the list of all users', async () => {
    const response = await userRepo.findAllUsers(true);
    expect(response).to.be.deep.equal(listUsers);
  });
  it('should return one user', async () => {
    let response = await userRepo.findUserById(user._id,true);
    expect(response).to.be.deep.equal(user);
  });

  it('should add a new user', async () => {
    let response = await userRepo.addNewUser(userToAdd,true);
    response = await userRepo.findAllUsers(true);
    expect(response).to.be.deep.equal(listUserUpdated);
  });
  it('should reset user database', async () => {
    await userRepo.resetUserDb(userToAdd,true);
    let response = await userRepo.findAllUsers(true);
    expect(response).to.be.deep.equal(listUsers);
  });
});
