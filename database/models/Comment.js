module.exports = function (sequelize, dataTypes){
    let alias = "Comments";
    
    let cols = {
        comment_id: {
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
        timeStamps: false
    };

    const Comment = sequelize.define(alias, cols, config);

    return Comment;
}