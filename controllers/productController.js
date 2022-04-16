const usuario = require("../db/usuario");

const productos = require ("../db/productos");

let productController = {
    product: function (req, res) {
        return res.render("product", {productos:productos});
    },
    productAdd: function (req, res) {
        return res.render("product-add", {usuario: usuario.lista[0].nombreDeUsuario});
    }
}

module.exports = productController;