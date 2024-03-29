const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genre extends Model {}

Genre.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

} , {
    sequelize,
    modelName: 'Genre',
    freezeTableName: true,
    timestamps: false,
});

module.exports = Genre