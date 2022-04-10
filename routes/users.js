var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();

router.get('/profile', usersController.profile);

router.get("/edit", usersController.profileEdit)

router.get("/register", usersController.register);

router.get("/login", usersController.login)

module.exports = router;
