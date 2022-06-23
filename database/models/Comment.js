module.exports = function (sequelize, dataTypes){
    let alias = "Comment";
    
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },  
        comment_text: {
            type: dataTypes.STRING
        },
        updated_at: {
            allowNull:true,
            type: dataTypes.DATE
        },
        created_at: {
            allowNull: true,
            type: dataTypes.DATE 
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "comments",
        timeStamps: true,
        underscored: true
    };

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: "products",
            foreignKey: "product_id",
        }),
        Comment.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id",     
        })       
    }  

    return Comment;
}