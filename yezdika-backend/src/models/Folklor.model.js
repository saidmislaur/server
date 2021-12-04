const mongoose = require('mongoose')

const FolklorSchema = mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  text: {
    type: String
  },
  pathImages: {
    type: String
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CategoryModel',
  },
  link: String,
  quote: String,
},
{
  timestamps: true
})

const FolklorModel = mongoose.model('FolklorModel', FolklorSchema);

module.exports = FolklorModel;
