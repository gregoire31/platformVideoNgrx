const commentModel = require('../model/comment');


module.exports.findCommentById = async (id, lean = false) => {
  return await commentModel.findOne({_id: id}).lean(lean);
}

module.exports.addComment = async (newObject, lean = false) => {

  
  return await commentModel.replaceOne({_id: newObject._id},newObject).lean(lean);
}

module.exports.createComment = async (idFilm,newObject, lean = false) => {

  return await commentModel.insertMany({_id: idFilm, comments: [newObject]});
}