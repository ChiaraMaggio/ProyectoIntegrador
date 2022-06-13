module.exports = function (sequelize, dataTypes){
    let alias = "User";
    
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        user_lastname: {
            allowNull: false,
            type: dataTypes.STRING
        },
        birth_date: {
            allowNull: false,
            type: dataTypes.DATE
        },
        user_email: {
            allowNull: false,
            type: dataTypes.STRING
        },
        user_password: {
            allowNull: false,
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        follower_id: {
            type: dataTypes.INTEGER
        },
        product_id:{
            type: dataTypes.INTEGER
        },
        comment_id:{
            type: dataTypes.INTEGER
        }
    };
    
    let config = {
        tableName: "users",
        timeStamps: true,
        underscored: true
    };

    const User = sequelize.define(alias, cols, config);

    /* User.associate = function (models) {
        User.belongsToMany(models.Follower, {
            as: "usersfollowers",
            through: "users_followers",
            foreignKey: "user_id",
            otherKey: "follower_id",
            timeStamps: false
        }),
        User.hasMany(models.Product, {
            as: "usersproducts",
            foreignKey: "product_id",
        }),
        User.hasMany(models.Comment, {
            as: "userscomments",
            foreignKey: "comment_id"
        })
    }; */

    return User;
}