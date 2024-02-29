const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define(
        "Activity",{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            difficulty: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            duration: {
                type: DataTypes.INTEGER
            },
            season: {
                type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),
                allowNull: false
            }
        },
        {tiestamps: false}
    )
}