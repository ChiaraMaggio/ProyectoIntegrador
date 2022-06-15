const usuario = require("../db/usuario");
const productos = require ("../db/productos");

const db= require("../database/models");
const comentarios = require("../db/comentarios");

let productController = {
    product: function (req, res) {
        return res.render("product", {productos:productos, comentarios: comentarios});
    },
    
    productAdd: function (req, res) {
        return res.render("product-add", {usuario: usuario.lista[0].nombreDeUsuario});
    },

    storeProductAdd: function (params) {
        
    }
}

module.exports = productController;