const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String,
  username: String,
  password : String
},{ versionKey: false });

module.exports = mongoose.model('User', userSchema);