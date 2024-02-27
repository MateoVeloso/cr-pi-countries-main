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
            dificulty: {
                type: DataTypes.ENUM(1,2,3,4,5),
                allowNull: false
            },
            duration: {
                type: DataTypes.INTEGER
            },
            season: {
                type: DataTypes.ENUM("verano", "otroño", "invierno", "primavera"),
                allowNull: false
            }
        }
    )
}