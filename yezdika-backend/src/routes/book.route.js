const { Router } = require('express');

const {BookCtrl} = require('../controllers/book.controller');

const router = Router();

router.post('/books', BookCtrl.addBook);
router.get('/books', BookCtrl.getBook);
router.delete('/books/:id', BookCtrl.delBook);
router.patch('/books/:id', BookCtrl.editBook);
router.get('/books/:id', BookCtrl.getBookId);

module.exports = router; 