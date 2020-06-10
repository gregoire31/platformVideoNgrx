const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  _id: String,
  title: String,
  image : String,
  description : String,
  prix : String
});

module.exports = mongoose.model('Film', filmSchema);