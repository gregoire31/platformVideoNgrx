const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    _id: String,
    usersPayed: [Object]
},{ versionKey: false });

module.exports = mongoose.model('Detail', detailSchema);