module.exports = function (sequelize, dataTypes){
    let alias = "Comment";
    
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },  
        comment_user: {
            allowNull: false,
            type: dataTypes.STRING
        },
        comment_text: {
            allowNull: false,
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE 
        },
        product_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        user_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "comments",
        timeStamps: false,
        underscored: true
    };

    const Comment = sequelize.define(alias, cols, config);

    Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: "productscomments",
            foreignKey: "product_id"
        }),
        Comment.belongsTo(models.User, {
            as: "userscomments",
            foreignKey: "user_id"
        })       
    }  

    return Comment;
}