module.exports = function (sequelize, dataTypes){
    let alias = "Follower";
    
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    };
    
    let config = {
        tableName: "followers",
        timeStamps: false,
        underscored: true
    };

    const Follower = sequelize.define(alias, cols, config);
    
    Follower.associate = function(models) {
        Follower.belongsToMany(models.User, {
            as: "usersfollowers",
            through: "users_followers",
            foreignKey: "follower_id",
            otherKey: "user_id",
            timeStamps: false
        })
    }; 

    return Follower;
}