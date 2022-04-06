var express = require('express');
const registerController = require('../controllers/registerController');
var router = express.Router();

/* GET register listing. */
router.get('/', registerController.register)
  

module.exports = router;