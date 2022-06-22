const productos = require ("../db/productos");
const db = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op

let searchResultsController = {
    /* searchResults: function (req, res) {
                return res.render("search-results", {productos:productos});
            
    }, */

    searchResultsDetail: function (req, res) {
       let busqueda = req.query.search;
       let errors = {}
            
       if (busqueda == "") {
        errors.message = "El buscador no puede estar vacio"
        res.locals.errors = errors;
        console.log(errors);
        return res.render ("search-results.ejs");
       }
       else {
            console.log(busqueda)
            db.Product.findAll({
                where: {
                    product_name:{[Op.like]: '%'+ req.query.search + '%'},
                },
                limit: 4,
                include: [
                    {association: "users"},
                    {association: "comments"},
                ],

            }) 

            .then((data) => {
                console.log(data)
                if(data != ''){
                  return res.render('search-results.ejs', {productos:data})
                }else{
                  errors.message = "Lo sentimos, no hay resultados para su búsqueda " ;
                  res.locals.errors = errors ;
                  return res.render('search-results.ejs')
                }
              })
            .catch(function (error) {
                console.log(error);                            
            })
         

        
       } 
    },
}
 
module.exports = searchResultsController;

/* return res.render("search-results", {productos:productos}); */