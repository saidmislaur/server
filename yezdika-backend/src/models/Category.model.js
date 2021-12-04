const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
  name: {
    required: true,
    type: String
  }
})

const CategoryModel = mongoose.model('CategoryModel', CategorySchema);

module.exports = CategoryModel;