const req = require("express/lib/request");
const users= require("../db/usuario");
const comentarios = require("../db/comentarios");
const db= require("../database/models");
const Comentario = db.Comment; 
const Producto = db.Product;
const Op= db.sequelize.Op;

let productController = {
    detail: function(req,res){
        const id = req.params.id;
       
        Producto.findByPk (id, {
            include: [
                { association: "comments",
                    include: [{association: "users"}],
                },
                {association: "users"}
            ],
            order: [["comments", "created_at", "DESC"]]
        })
 
            .then ((data) =>{
                if (data == null){
                    return res.redirect("/")
                } else {
                    return res.render("product.ejs", {data: data})
                }
            })
            .catch(error => {
                console.log(error)
            })
        },
    add: function(req, res) {
        return res.render("product-add");
    },

    comment: function(req,res){
        if(req.session.user){
            let comment = {
                user_id : req.session.user.id,
                product_id : req.params.id,
                comment_text: req.body.text,
            }
            Comentario.create(comment)
                .then(function (){
                    return res.redirect(`/products/${req.params.id}`)
                })
                .catch(function (error) {
                    console.log(error);
                }) /* aqui puede haber otro error */
        } else{
            return res.redirect("/users/login")
        }
    },

    deleteComment: function (req,res){
    
        Comentario.findByPk(req.params.id)
            .then((id) => {
            Comentario.destroy({
                where: [{id: req.params.id}]
            })
            .then(function () {
                return res.redirect(`/products/${data.product_id}`)/* TITAN HELP < */
            })
            .catch(error => {
                console.log(error)
            })
        })
    },

    delete: function(req, res) {
        
        Producto.findByPk(req.params.id)
        .then((id) => {
            if(req.session.user.id == data.user_id){
            Producto.destroy({
                where: [{ id : req.params.id }]
            })
            .then(() => {
                return res.redirect("/")
            })
            .catch(error => {
                console.log(error)
            })
        } else{
            return res.redirect("users/login")
        }
   
            })
            .catch(error => {
            console.log(error)
        })
       
        },
    
    productStore: function(req, res){
    
        let errors = {}
    
        if(req.body.product_name == ""){
            errors.message = "El nombre del producto es obligatorio",
            res.locals.errors = errors;
            return res.render('products-add')
        } else if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg'){
            errors.message = "El archivo debe ser una imagen";
            res.Locals.errors = errors;
            return res.render('products-add')
        } else if (req.body.description == ""){
            errors.message = "La descripción del producto es obligatoria";
            res.locals.errors = errors;
            return res.render('products-add')
        } else {
            let product = {
                product_name: req.body.product_name,
                product_description: req.body.product_description,
                product_image: req.file.filename,
                user_id: req.session.user_id,
            }
            db.Product.create(product)
                .then( productoGuardado => {
                    return res.redirect("/")
                })
                .catch(error => console.log(error))
            }
        },
    
    edit: function(req, res) {
        let id = req.params.id;
        if(req.session.user){
            db.Product.findByPk(id)
                .then((data) => {
                    if(req.session.user.id == data.user_id){ /* aqui esta diferente */
                        return res.render("product-edit.ejs", {data: data});
                    }else{
                        return res.redirect("/")
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }else{
            return res.redirect("/users/login")
        }
    },
    productUpdate: function(req, res){
        let id = req.params.id;
 
        Producto.findByPk(id)
        .then((data) => {
            const product = {
                product_name: req.body.name,
                product_image: "",
                product_description: req.body.description,
            }
           
            if(req.file == undefined){
                product.product_image = data.product_image;
            }else{
                product.product_image = req.file.filename;
            }
   
            Producto.update(product, {
                where: {
                    id: id
                }
            })
            .then(function(){
                return res.redirect(`/products/${id}`) /* aqui capaz haya un error */
            })
            .catch((error) =>{
                console.log(error)
            });
        })
    },


    
 



    


    }
        
module.exports = productController

/*     product: function (req, res) {
        return res.render("product", {productos:productos, comentarios: comentarios});
    },
    
    productAdd: function (req, res) {
        return res.render("product-add", {usuario: usuario.lista[0].nombreDeUsuario});
    },

    storeProductAdd: function (params) {
        
    } */