var express = require('express');
const searchResultsController = require('../controllers/searchResultsController');
var router = express.Router();

/* GET register listing. */
router.get('/', searchResultsController.searchResults)
  

module.exports = router;