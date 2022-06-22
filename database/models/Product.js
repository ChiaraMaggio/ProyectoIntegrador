module.exports = function (sequelize, dataTypes){
    let alias = "Product" ;

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        product_name: {
            type: dataTypes.STRING
        },
        product_description: {
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
            type: dataTypes.INTEGER
        },
        created_at: {
            allowNull: true,
            type: dataTypes.DATE
        },
        updated_at: {
            allowNull: true,
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
            as: "users",
            foreignKey: "user_id",
/*             onDelete: "NO ACTION"
 */        }),
        Product.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "product_id",
            /* onDelete: 'cascade' */
        }) 
    };

    return Product;   
}