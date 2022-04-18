const usuario = require("../db/usuario");

const productos = require ("../db/productos");
const comentarios = require("../db/comentarios");

let productController = {
    product: function (req, res) {
        return res.render("product", {productos:productos, comentarios: comentarios});
    },
    productAdd: function (req, res) {
        return res.render("product-add", {usuario: usuario.lista[0].nombreDeUsuario});
    }
}

module.exports = productController;