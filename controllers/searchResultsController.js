const productos = require ("../db/productos");

let searchResultsController = {
    searchResults: function (req, res) {
        return res.render("search-results", {productos:productos});
    } 
}

module.exports = searchResultsController;