const {Router} = require('express');

const router = Router();
router.use(require('./post.route'));
router.use(require('./artefact.route'))
router.use(require('./book.route'))
router.use(require('./folklor.route'))
router.use(require('./gallery.route'))
router.use(require('./category.route'))

module.exports = router;