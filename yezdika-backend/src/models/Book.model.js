const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  author: {
    type: String
  },
  text: {
    required: true,
    type: String
  },
  image: {
    type: String
  },
},
{
  timestamps: true
})

const BookModel = mongoose.model('BookModel', BookSchema);

module.exports = BookModel;