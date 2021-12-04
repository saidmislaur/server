const CategoryModel = require('../models/Category.model')

module.exports.CategoryCtrl = {
  addcategory: async(req, res) => {
    const {name} = req.body;
    try {
      const category = await CategoryModel.create({
        name
      });
      res.json(category)
    } catch (error) {
      console.log('ошибка добавления');
    }
  },

  getCategory: async(req, res) => {
    try {
      const category = await CategoryModel.find();
      res.json(category);
    } catch (error) {
      console.log('ошибка вывода')
    }
  },

  delCategory: async(req, res) => {
    try {
      await CategoryModel.findByIdAndDelete(req.params.id);
      res.json("книга удалена");
    } catch (error) {
      console.log('ошибка удаления книги')
    }
  },

  editCategory: async(req, res) => {
    try {
      await CategoryModel.findByIdAndUpdate(req.params.id, req.body);
      res.json("отредактировано");
    } catch (error) {
      console.log('ошибка редактирования')
    }
  },

  getCategoryId: async(req, res) => {
    try {
      const category = await CategoryModel.findById(req.params.id);
      res.json(category);
    } catch (error) {
      console.log('ошибка вывода')
    }
  },
}