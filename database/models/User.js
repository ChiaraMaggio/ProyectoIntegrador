module.exports = function (sequelize, dataTypes){
    let alias = "User";
    
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_name: {
            type: dataTypes.STRING
        },
        user_lastname: {
            type: dataTypes.STRING
        },
        birth_date: {
            type: dataTypes.DATE
        },
        user_email: {
            type: dataTypes.STRING
        },
        user_password: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        created_at: {
            allowNull: true,
            type: dataTypes.DATE
        },
        updated_at: {
            allowNull: true,
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

    User.associate = function (models) {
       /*  User.belongsToMany(models.Follower, {
            as: "usersfollowers",
            through: "users_followers",
            foreignKey: "user_id",
            otherKey: "follower_id",
            timeStamps: false
        }), */
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "user_id",
/*             onDelete: 'cascade'
 */        }),
        User.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "user_id",
/*             onDelete: 'cascade'
 */        })
    }; 

    return User;
}