const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  genre: { type: String },
  synopsis: { type: String },
  authorId: { type: String }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
