var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/users/profile', usersController.profile);

router.get("/users/register", usersController.register);

module.exports = router;
