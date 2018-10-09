var express = require('express');
var router = express.Router();

var contentController = require('../controllers/contentController');

/* GET about page */
router.get('/', contentController.about);
router.get('/objectives', contentController.objectives);
router.get('/history', contentController.history);
router.get('/volunteers', contentController.volunteers);
router.get('/committee', contentController.committee);


module.exports = router;