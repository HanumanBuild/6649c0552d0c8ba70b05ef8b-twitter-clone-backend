const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;