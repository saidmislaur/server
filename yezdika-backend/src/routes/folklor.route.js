const { Router } = require('express');

const {FolklorCtrl} = require('../controllers/folklor.controller');

const router = Router();

router.post('/folklor', FolklorCtrl.addFloklor);
router.get('/folklor', FolklorCtrl.getFolklor);
router.delete('/folklor/:id', FolklorCtrl.delFolklor);
router.patch('/folklor/:id', FolklorCtrl.editFolklorId);
router.get('/folklor/:id', FolklorCtrl.getFolklorId);
router.post('/folklor/:id', FolklorCtrl.addImage);

module.exports = router;
