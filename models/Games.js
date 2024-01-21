const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references:{
            model: 'Genre',
            key: 'id',
        }
    }

},{
    sequelize,
    modelName: 'Game',
    freezeTableName: true,
    timestamps: false,
})

module.exports = Game