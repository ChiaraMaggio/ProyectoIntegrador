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
 
router.get("/:id", productController.detail);
router.get("/product/new", productController.add);

router.post("/:id/comment", productController.comment);
router.post("/delete/:id", productController.deleteComment);


router.post("/product/new", upload.single("image"), productController.productStore);
router.post("/product-delete/:id", productController.delete);

router.get("/product-edit/:id", productController.edit);
router.post("/product-edit/:id", productController.productUpdate);

module.exports = router;