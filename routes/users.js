var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

router.get('/users/profile', usersController.profile);

router.get("/users/profile-edit", usersController.profileEdit)

router.get("/users/register", usersController.register);

module.exports = router;
