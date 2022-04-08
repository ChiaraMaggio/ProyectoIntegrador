var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

/* GET product listing. */
router.get('/product', productController.product)

router.get("/product/add", productController.productAdd)

module.exports = router;