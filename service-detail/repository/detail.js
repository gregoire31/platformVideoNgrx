const detailModel = require('../model/detail');


module.exports.findDetailById = async (id, lean = false) => {
  return await detailModel.findOne({_id: id}).lean(lean);
}

module.exports.addUserPayed = async (newObject, lean = false) => {
  
  return await detailModel.replaceOne({_id: newObject._id},newObject).lean(lean);
}