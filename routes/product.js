var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET product listing. */
router.get('/:id?', productController.product)

router.get("/add", productController.productAdd)

module.exports = router;