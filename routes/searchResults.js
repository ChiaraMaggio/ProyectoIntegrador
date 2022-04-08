var express = require('express');
const searchResultsController = require('../controllers/searchResultsController');
var router = express.Router();

/* GET register listing. */
router.get('/searchresults', searchResultsController.searchResults)
  

module.exports = router;