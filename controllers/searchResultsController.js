const productos = require ("../db/productos");
const db = require("../database/models/index");
const op = db.Sequelize.op

let searchResultsController = {
    /* searchResults: function (req, res) {
                return res.render("search-results", {productos:productos});
            
    }, */

    searchResultsDetail: function (req, res) {
       let product = req.query.search;
       let errors = {}

       if (product == "") {
        errors.message = "Este campo no puede estar vacio"
        res.locals.errors = errors;
        console.log(errors);
        return res.render ("search-results.ejs");
       }
       else {
            db.product.findAll({
                where: {
                    [Op.or]:[
                        {product_name:{[Op.like]:"%"+ product +"%"}},
                        {product_description:{[Op.like]:"%"+ product +"%"}},
                    ]
                },
                order:[
                    ["product_name", "ASC"]
                ],
                limit: 4,
                include: [
                    {association: "usersproducts"},
                    {association: "productscomment"},
                ],

            }) 

            .then((data) => {
            
                if(data != ''){
                  return res.render('search-results.ejs', {data:data})
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