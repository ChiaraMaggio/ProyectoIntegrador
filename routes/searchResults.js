var express = require('express');
const searchResultsController = require('../controllers/searchResultsController');
var router = express.Router();
let path = require('path');

/* GET register listing. */
router.get('/', searchResultsController.searchResultsDetail)

  

module.exports = router;