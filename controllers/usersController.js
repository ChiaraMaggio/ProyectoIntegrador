const usuario = require("../db/usuario");

const productos = require ("../db/productos");
const bcryptjs = require("bcryptjs")
const db = require("../database/models");
const { localsName } = require("ejs");
const Usuario = db.User;

let usersController = {
    register: function (req, res) {
        return res.render("register"); /* muestra el formulario de registro */
    },

    registerStore: function (req, res) {
        let errors = {};
        if (req.body.email == "") {
            errors.message = "El email es obligatorio";
            res.locals.errors = errors; /* guardar el error en locals */
            console.log(errors); 
            return res.render("register");
        } else if (req.body.nombre == "") {
            errors.message = "Ingrese su nombre";
            res.locals.errors = errors; /* guardar el error en locals */
            console.log(errors); 
            return res.render("register");
        } else if (req.body.apellido == "") {
            errors.message = "Ingrese su apellido";
            res.locals.errors = errors; /* guardar el error en locals */
            console.log(errors); 
            return res.render("register");
        } else if (req.body.password == "") {
            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors; /* guardar el error en locals */
            console.log(errors); 
            return res.render("register");
        } /* else if (req.body.password.value < 3) {
            errors.message = "La contraseña debe tener al menos 3 caracteres";
            res.locals.errors = errors; /* guardar el error en locals 
            console.log(errors); 
            return res.render("register"); 
        }*/ else if (req.body.nacimiento == "") {
            errors.message = "Ingrese su fecha de nacimiento";
            res.locals.errors = errors; /* guardar el error en locals */
            console.log(errors); 
            return res.render("register"); 
        } else if (req.file.mimetype !== "image/png" && req.file.mimetype !== "image/jpg" && req.file.mimetype !== "image/jpeg") {
            errors.message = "El archivo debe ser jpg o png";
            res.locals.errors = errors; /* guardar el error en locals */
            console.log(errors); 
            return res.render("register");
        } else {
            Usuario.findOne({
                where: [{user_email: req.body.email}]
            })
            .then(function (user) {
                if (user != null) {
                    errors.message = "El email ya está registrado, por favor ingrese otro";
                    res.locals.errors = errors; /* guardar el error en locals */
                    console.log(errors); 
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

    login: function (req, res) {
        return res.render("login"); /* muestra el formulario de login */
    },

    loginStore: function (req, res) {
        let errors = {};
        Usuario.findOne({
            where: [{user_email: req.body.email}]
        })
        .then(function (user) {
            if (user == null) {
                errors.message = "El usuario no existe";
                res.locals.errors = errors; /* guardar el error en locals */
                console.log(errors); 
                return res.render("login");
            } else if (bcryptjs.compareSync(req.body.password, user.user_password) == false) {
                errors.message = "La contraseña es incorrecta";
                res.locals.errors = errors; /* guardar el error en locals */
                console.log("errors");
                return res.render("login");
            } else { 
                /* preguntar si el usuario tildó el checkbox para que se recuerden sus datos al momento de iniciar sesión */
                if (req.body.remember !== undefined) {
                res.cookie("userId", user.id, {maxAge: 1000*60*5});
                console.log("userId");
                }
                req.session.user = user;
                return res.redirect("/");
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    
    },

    logout: function (req, res) {
        req.session.destroy();

        res.clearCookie("userId");
        
        res.redirect("/")
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
}

module.exports = usersController;