const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
            msg: 'The comment cannot be empty.'
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
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Post',
            key: 'id',
        }
    }
}, {
    sequelize,
    modelName: 'Comment',
    tableName: 'Comment',
    freezeTableName: true,
    timestamps: true,
});

module.exports = Comment;