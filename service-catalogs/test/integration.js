const app = require('../index');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

const listCatalogs = require('./mocks/catalogs_list.json')
const movie = require('./mocks/movie.json')

describe('GET /catalogs', () => {
    it('should return a list of movies', done => {
      chai
        .request(app)
        .get('/catalogs')
        .end((_, res) => {
          // expect(res).to.have.status(200);
          expect(res.body).to.deep.equal(listCatalogs);
          done();
        });
    });
    it('should return one movie', done => {
      chai
        .request(app)
        .get('/catalog/5e99dd6a766fp369c81dec71')
        .end((_, res) => {
          // expect(res).to.have.status(200);
          expect(res.body).to.deep.equal(movie);
          done();
        });
    });
  });
