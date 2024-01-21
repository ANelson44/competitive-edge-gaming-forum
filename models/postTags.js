const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class postTag extends Model {}

postTag.init ({
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Post',
            key: 'id',
        }
    },
    tagId: {
         type: DataTypes.INTEGER,
         references: {
             model: 'Tag',
             key: 'id',
         }
    }

} , {
    sequelize,
    modelName: 'PostTag',
    freezeTableName: true,
    timestamps: false,
});

module.exports = postTag