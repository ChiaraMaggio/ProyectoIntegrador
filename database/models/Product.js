module.exports = function (sequelize, dataTypes){
    let alias = "products" ;

    let cols = {
        product_id: {
            autoIncrement: true,
            primaryKey: true,
            Type: dataTypes.INTEGER
        },
        product_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        product_description : {
            allowNull: false,
            type: dataTypes.STRING
        },
        product_image : {
            type: dataTypes.STRING
        },
        franchise : {
            type: dataTypes.STRING
        },
        product_comments : {
            type: dataTypes.INTEGER
        },
        user_id :{
            allowNull: false,
            type: dataTypes.INTEGER
        },
        created_at :{
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName : "users",
        timeStamps : false
    };

    const Product = sequelize.define(alias, cols,config);
        
    return Product;   
}