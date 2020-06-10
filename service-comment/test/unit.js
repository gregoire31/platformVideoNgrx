// const sinon = require('sinon');
const chai = require('chai');
const mongoose = require('mongoose');
// const request = require('request-promise');
const expect = chai.expect;

const commentRepo = require('../repository/comment');
const listComment = require('./mocks/list_comment.json')
const listCommentUpdated = require('./mocks/list_comment_updated.json')
const newComment = require('./mocks/newCommentToAdd.json')
before(() => {
  mongoose.connect('mongodb://mongo:27017/comments', {useNewUrlParser: true, useUnifiedTopology: true});
});

after(() => {
  mongoose.connection.close();
});

describe('comment list', () => {
  it('should return a comment with lean option', async () => {
    const listCommentToReturn = listComment
    const response = await commentRepo.findCommentById(listCommentToReturn._id,true);
    expect(response).to.be.deep.equal(listCommentToReturn);
  });
  it('should add a new comment', async () => {
    let commentList = await commentRepo.findCommentById(listCommentUpdated._id,true);
    let comment = {
      userId: newComment.userId,
      message : newComment.message,
      dateCreated: newComment.dateCreated
    }
    commentList.comments.push(comment)
    let response = await commentRepo.addComment(listCommentUpdated._id,true);
    expect(commentList).to.be.deep.equal(listCommentUpdated);
  });
});
