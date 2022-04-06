var express = require('express');
const profileController = require('../controllers/profileController');
var router = express.Router();

/* GET register listing. */
router.get('/', profileController.profile)
  

module.exports = router;