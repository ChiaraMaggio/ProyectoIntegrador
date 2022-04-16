let productos = require ("../db/productos");

let mainController = {
    main: function (req, res) {
        return res.render("main", {productos:productos});
    }
}

module.exports = mainController;