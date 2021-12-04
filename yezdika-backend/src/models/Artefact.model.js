const mongoose = require('mongoose')

const ArtefactShema = mongoose.Schema({
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
},
{
  timestamps: true
})

const ArtefactModel = mongoose.model('ArtefactModel', ArtefactShema);

module.exports = ArtefactModel;
