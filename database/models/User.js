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
    };
    
    let config = {
        tableName: "users",
        timestamps: true,
        underscored: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "user_id",
        }),
        User.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "user_id",     
        }),
        User.hasMany(models.Follower,{
            as:"followers",
            foreignKey: "user_id"
        })
        User.hasMany(models.Follower,{
            as:"followed",
            foreignKey: "followed_id"
        })
    }; 

    return User;
}