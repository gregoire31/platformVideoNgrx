const app = require('../index');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const chaiHttpPromise = require('chai-as-promised')
chai.use(chaiHttp)
chai.use(chaiHttpPromise)
const detail = require('./mocks/detail.json')
const fullDetail = require('./mocks/detail_full.json')
const newUserPayed = require('./mocks/newUserPayed.json')
const detailUpdated = require('./mocks/detail_updated.json')

describe('GET /detail', () => {
    // it('should return a detail', done => {
    //   chai
    //     .request(app)
    //     .get('/detail/5e99dd6a766fp369c81dec71')
    //     .end((_, res) => {
    //       // expect(res).to.have.status(200);
    //       expect(res.body).to.deep.equal(fullDetail);
    //       done();
    //     });
    // });
    // it('should return one movie', done => {
    //   chai
    //     .request(app)
    //     .get('/catalog/5e99dd6a766fp369c81dec71')
    //     .end((_, res) => {
    //       // expect(res).to.have.status(200);
    //       expect(res.body).to.deep.equal(movie);
    //       done();
    //     });
    // });
  });
