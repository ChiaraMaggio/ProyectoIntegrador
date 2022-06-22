let productos = require ("../db/productos"); 
let db = require("../database/models"); /* requerimos la conexión a la base de datos y todos los modelos */
let op = db.Sequelize.Op;
let mainController = {
    index: function(req,res) {
        db.Product.findAll({
          include: [  
            { association: 'comments' }, 
           /* Relacion de comentario con producto */
                                    
            {association: 'users'}
            /*Relación de usuarios con productos*/
          ],
          order:  [ ["created_at", "DESC" ] ]
        })
        .then ((data) => {
          return res.render ("main", {data: data})
        })
        .catch((error)=>{
          console.log(error)
      })
      }
      
    }

module.exports = mainController;
