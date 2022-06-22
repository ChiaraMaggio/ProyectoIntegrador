const productos = require ("../db/productos");
let db = require ("../database/models");
let Op = db.sequelize.Op;

let searchResultsController = {
    searchResults: function(req, res) {
       
        let product = req.query.search;
        let errors = {}
    
        if(product == ""){
        errors.message = "No completaste este campo";
        res.locals.errors = errors ;
        return res.render('search-results.ejs')
        }else {
            db.Product.findAll({
                where: {
                    [Op.or]:[
                        {product_name: {[Op.like]: "%"+ product + "%", }},
                        {product_description: {[Op.like]: "%" + product + "%", }},
                        {users_id: {[Op.like]: "%" + product + "%", }},
                    ]
                    },
                order: [
                    ['product_name', 'ASC']
                ],
                include: [  
                  { association: 'users' },
                  { association: 'comments'}                           
            ],
            })
              .then((data) => {
                
                  if(data != ''){
                    return res.render('search-results.ejs', {data:data})
                  }else{
                    errors.message = "Lo sentimos, no hay resultados para su criterio de búsqueda " ;
                    res.locals.errors = errors ;
                    return res.render('search-results.ejs')
                  }
                })
              .catch((e) => {
                  console.log(e)
              })
        }},
      }

module.exports = searchResultsController;