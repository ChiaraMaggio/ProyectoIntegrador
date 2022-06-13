module.exports = function (sequelize, dataTypes){
    let alias = "Product" ;

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        product_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        product_description: {
            allowNull: false,
            type: dataTypes.STRING
        },
        product_image: {
            type: dataTypes.STRING
        },
        franchise: {
            type: dataTypes.STRING
        },
        comment_id: {
            type: dataTypes.INTEGER
        },
        user_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "products",
        timeStamps: true,
        underscored: true
    };

    const Product = sequelize.define(alias, cols,config);
    
    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: "usersproducts",
            foreignKey: "user_id"
        }),
        Product.hasMany(models.Comment, {
            as: "productscomments",
            foreignKey: "comment_id"
        }) 
    };

    return Product;   
}