const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'The title cannot be empty.'
            }
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'The post must not be empty.'
            }
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id',
        }
    },
    gameId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Game',
            key: 'id',
        }
    }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'Post',
    freezeTableName: true,
    timestamps: true,
});

module.exports = Post;