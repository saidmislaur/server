const BookModel = require('../models/Book.model')

module.exports.BookCtrl = {
  addBook: async(req, res) => {
    const {name, author, text, image} = req.body;
    try {
      const book = await BookModel.create({
        name,
        author,
        text,
        image,
      });
      res.json(book)
    } catch (error) {
      console.log('ошибка добавления книги');
    }
  },

  getBook: async(req, res) => {
    try {
      const book = await BookModel.find();
      res.json(book);
    } catch (error) {
      console.log('ошибка вывода книг')
    }
  },

  delBook: async(req, res) => {
    try {
      await BookModel.findByIdAndDelete(req.params.id);
      res.json("книга удалена");
    } catch (error) {
      console.log('ошибка удаления книги')
    }
  },

  editBook: async(req, res) => {
    try {
      await BookModel.findByIdAndUpdate(req.params.id, req.body);
      res.json("книга отредактирована");
    } catch (error) {
      console.log('ошибка редактирования книги')
    }
  },

  getBookId: async(req, res) => {
    try {
      const book = await PostModel.findById(req.params.id);
      res.json(book);
    } catch (error) {
      console.log('ошибка вывода книги')
    }
  },
}