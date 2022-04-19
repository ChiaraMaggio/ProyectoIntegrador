var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET product listing. */

router.get("/add", productController.productAdd)

router.get('/:id?', productController.product)

module.exports = router;