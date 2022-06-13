var express = require('express');
var router = express.Router();
let multer = require("multer");
let path = require("path");
const productController = require('../controllers/productController');

/* Configuración multer */
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/images/products")); /* indica dónde se guarda el archivo */
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({storage: storage});

/* Rutas products */
router.get("/add", productController.productAdd);
router.post("/add", upload.single("product"), productController.storeProductAdd);

router.get('/:id?', productController.product);

module.exports = router;