const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    _id: String,
    comments: [Object],
},{ versionKey: false });

module.exports = mongoose.model('Comment', commentSchema);