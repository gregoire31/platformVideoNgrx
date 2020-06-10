const app = require('../index');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

const listUsers = require('./mocks/user_list.json')
const user = require('./mocks/user.json')
const userToAdd = require('./mocks/userToAdd.json')
const listUserUpdated = require('./mocks/user_list_updated.json')


describe('GET /users', () => {
  it('should return a list of users', done => {
    chai
      .request(app)
      .get('/users/5e99dd6a777f9369c81dec6f')
      .end((_, res) => {
        // expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(user);
        done();
      });
  });
  it('should return a list of users', done => {
    chai
      .request(app)
      .get('/testUsers')
      .end((_, res) => {
        // expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(listUsers);
        done();
      });
  });
});