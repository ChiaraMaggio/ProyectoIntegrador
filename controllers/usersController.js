const usuario = require("../db/usuario");

const productos = require ("../db/productos");

let usersController = {
    register: function (req, res) {
        return res.render("register");
    },
    login: function (req, res) {
        return res.render("login");
    },
    profile: function (req, res) {
        return res.render("profile", {usuario: usuario.lista[0].nombreDeUsuario, foto: usuario.lista[0].fotoDePerfil, misProductos: usuario.lista[0].cantidadDeProductos, seguidores: usuario.lista[0].cantidadDeSeguidores, comentarios: usuario.lista[0].comentarios, productos:productos});
    },
    profileEdit: function (req, res) {
        return res.render("profile-edit", {usuario: usuario.lista[0].nombreDeUsuario});
    },
    /* productos: function (req, res) {
        return res.render("mis-productos", {productos:productos});
    }    */


}

module.exports = usersController;