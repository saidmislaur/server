const { Router } = require('express');

const {GalleryCtrl} = require('../controllers/gallery.controller');

const router = Router();

router.post('/gallery', GalleryCtrl.addImg);
router.get('/gallery', GalleryCtrl.getImg);
router.delete('/gallery/:id', GalleryCtrl.delImg);
router.patch('/gallery/:id', GalleryCtrl.editImg);
router.get('/gallery/:id', GalleryCtrl.getImgId);
router.post('/gallery/:id', GalleryCtrl.updateImg);

module.exports = router;
