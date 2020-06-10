const userModel = require('../model/user');

module.exports.findAllUsers = async (lean = false) => {
  return await userModel.find({}).lean(lean);
}

module.exports.findUserById = async (id, lean = false) => {
  const user = await userModel.findOne({_id: id}).lean(lean);
  return user; 
}

module.exports.addNewUser = async (newUser, lean = false) => {

  const user = await userModel.insertMany(newUser);
  return user; 
}

module.exports.resetUserDb = async (userToAdd, lean = false) => {

    return await userModel.remove(userToAdd).lean(lean);
  }