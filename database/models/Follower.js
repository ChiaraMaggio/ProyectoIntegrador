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
        timeStamps: true,
        underscored: true
    };

    const Follower = sequelize.define(alias, cols, config);
    
    Follower.associate = function(models){
        Follower.belongsTo(models.User,{
            as: 'users',
            foreignKey:'user_id',
        })
        /* Follower.belongsTo(models.User,{
            as: 'usersFollowed',
            foreignKey:'followed_id',
        }) */
    }

    return Follower;
}