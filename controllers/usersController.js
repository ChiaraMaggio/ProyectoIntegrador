const usuario = require("../db/usuario");

let usersController = {
    register: function (req, res) {
        return res.render("register");
    },
    login: function (req, res) {
        return res.render("login");
    },
    profile: function (req, res) {
        return res.render("profile", {usuario: usuario.lista[0].nombreDeUsuario, foto: usuario.lista[0].fotoDePerfil, productos: usuario.lista[0].cantidadDeProductos, seguidores: usuario.lista[0].cantidadDeSeguidores, comentarios: usuario.lista[0].comentarios});
    },
    profileEdit: function (req, res) {
        return res.render("profile-edit");
    }  
}

module.exports = usersController;