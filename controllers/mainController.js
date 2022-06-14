let productos = require ("../db/productos"); 


const db = require("../database/models"); /* requerimos la conexión a la base de datos y todos los modelos */

//const db = require("../database/models"); /* requerimos la conexión a la base de datos y todos los modelos */

let mainController = {
    main: function (req, res) {
        return res.render("main", {productos:productos});
        /* db.Product.findAll()
        .then(function (productos) {
            return res.render("main", {productos: productos}); /* averiguar si va en singular como en el alias del modelo o en plural como en la tabla de la db
        })
        .catch(function (error) {
            console.log(error);
        }) */
    }
}

module.exports = mainController;
