const { Router } = require('express');

const {CategoryCtrl} = require('../controllers/category.controller');

const router = Router();

router.post('/categories', CategoryCtrl.addcategory);
router.get('/categories', CategoryCtrl.getCategory);
router.delete('/categories/:id', CategoryCtrl.delCategory);
router.patch('/categories/:id', CategoryCtrl.editCategory);
router.get('/categories/:id', CategoryCtrl.getCategoryId);

module.exports = router; 