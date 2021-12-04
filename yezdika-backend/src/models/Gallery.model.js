const mongoose = require('mongoose')

const GallerySchema = mongoose.Schema({
  desc: {
    type: String
  },
  pathImages: {
    type: String
  }
},
{
  timestamps: true
})

const GalleryModel = mongoose.model('GalleryModel', GallerySchema);

module.exports = GalleryModel;
