const { Router } = require('express');

const {PostCtrl} = require('../controllers/PostsController');

const router = Router();

router.post('/posts', PostCtrl.addPost);
router.get('/posts', PostCtrl.getPost);
router.delete('/posts/:id', PostCtrl.delPost);
router.patch('/posts/:id', PostCtrl.editPost);
router.get('/posts/:id', PostCtrl.getPostId);
router.post('/posts/:id', PostCtrl.addImage);

module.exports = router;
