const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  text: {
    required: true,
    type: String
  },
  pathImages: {
    type: String
  },
  link: String,
  quote: String,
},
{
  timestamps: true
})

const PostModel = mongoose.model('PostModel', PostSchema);

module.exports = PostModel;
