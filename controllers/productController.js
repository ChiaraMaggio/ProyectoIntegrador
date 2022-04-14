const usuario = require("../db/usuario");

let productController = {
    product: function (req, res) {
        return res.render("product");
    },
    productAdd: function (req, res) {
        return res.render("product-add", {usuario: usuario.lista[0].nombreDeUsuario});
    }
}

module.exports = productController;