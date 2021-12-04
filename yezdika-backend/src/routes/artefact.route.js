const { Router } = require('express');

const {ArtefactCtrl} = require('../controllers/artefact.controller');

const router = Router();

router.post('/artefacts', ArtefactCtrl.addArtefact);
router.get('/artefacts', ArtefactCtrl.getArtefact);
router.delete('/artefacts/:id', ArtefactCtrl.delArtefact);
router.patch('/artefacts/:id', ArtefactCtrl.editArtefact);
router.get('/artefacts/:id', ArtefactCtrl.getArtefactId);
router.post('/artefacts/:id', ArtefactCtrl.addImage);

module.exports = router;
