const app = require('../index');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp)

const listComment = require('./mocks/list_comment.json')
const listCommentUpdated = require('./mocks/list_comment_updated.json')
const newComment = require('./mocks/newCommentToAdd.json')

describe('GET /comment', () => {
    it('should return a comment', done => {
      chai
        .request(app)
        .get('/comment/5e99dd6a766f9369c81d8c71')
        .end((_, res) => {
          // expect(res).to.have.status(200);
          res.body = res.body.getCommentList
          expect(res.body).to.deep.equal(listComment);
          done();
        });
    });
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
