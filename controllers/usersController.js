const usuario = require("../db/usuario");

const productos = require ("../db/productos");

const bcryptjs = require("bcryptjs");
const db = require("../database/models");
const Usuario = db.User;

let usersController = {
    register: function (req, res) {
        return res.render("register");
    },

    registerStore: function (req, res) {
        let errors = {};
        if (req.body.email == "") {
            errors.message = "El email es obligatorio";
            console.log(errors); /* guardar el error en locals */
            return res.render("register");
        } else if (req.body.nombre == "") {
            errors.message = "Ingrese su nombre";
            console.log(errors); /* guardar el error en locals */
            return res.render("register");
        } else if (req.body.apellido == "") {
            errors.message = "Ingrese su apellido";
            console.log(errors); /* guardar el error en locals */
            return res.render("register");
        } else if (req.body.password == "") {
            errors.message = "La contraseña es obligatoria";
            console.log(errors); /* guardar el error en locals */
            return res.render("register");
        } else if (req.body.nacimiento == "") {
            errors.message = "Ingrese su fecha de nacimiento";
            console.log(errors); /* guardar el error en locals */
            return res.render("register"); 
        } /* else if (req.body.documento = "") {
            errors.message = "Ingrese su número de documento";
            console.log(errors); /* guardar el error en locals 
            return res.render("register");
        } */ 
        else if (req.file.mimetype !== "image/png" && req.file.mimetype !== "image/jpg" && req.file.mimetype !== "image/jpeg") {
            errors.message = "El archivo debe ser jpg o png";
            console.log(errors); /* guardar el error en locals */
            return res.render("register");
        } else {
            Usuario.findOne({
                where: [{user_email: req.body.email}]
            })
            .then(function (user) {
                if (user != null) {
                    errors.message = "El email ya está registrado, por favor ingrese otro";
                    console.log(errors); /* guardar el error en locals */
                    return res.render("register");
                } else {
                    let user = {
                        user_name: req.body.nombre,
                        user_lastname: req.body.apellido,
                        user_email: req.body.email,
                        birth_date: req.body.nacimiento,
                        user_password: bcryptjs.hashSync(req.body.password, 10),
                        avatar: req.file.filename
                    }

                    Usuario.create(user)
                        .then(function (user) {
                            return res.redirect("/users/login");
                        })
                        .catch(function (error) {
                            console.log(error);                            
                        })
                }
            })
        }       
    },

    login: function (req, res) { /* preguntar si hacen falta dos métodos en el caso de login
        if (req.session.user != undefined) {
            return res.redirect("/");
        } else {
            return res.render("login");
        } */
    },

    loginStore: function (req, res) {
        let errors = {};
        
    },

    profile: function (req, res) {
        return res.render("profile", {usuario: usuario.lista[0].nombreDeUsuario, foto: usuario.lista[0].fotoDePerfil, misProductos: usuario.lista[0].cantidadDeProductos, seguidores: usuario.lista[0].cantidadDeSeguidores, comentarios: usuario.lista[0].comentarios, productos:productos});
    },

    profileEdit: function (req, res) {
        return res.render("profile-edit", {usuario: usuario.lista[0].nombreDeUsuario});
    },

    profileEditStore: function (req, res) {
        if (req.session.User == undefined) {
            return res.redirect("/");
        } else {

        }
    }

    /* productos: function (req, res) {
        return res.render("mis-productos", {productos:productos});
    } */

}

module.exports = usersController;