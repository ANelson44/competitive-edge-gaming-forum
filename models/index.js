const User = require('./User')
const Post = require('./Post')
const Tag = require('./Tags')
const Comment = require('./Comments')
const Game = require('./Games')
const Genre = require('./Genres')
const PostTag = require('./postTags')

// User-Post

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'userId'
});

Post.belongsTo(Game, {
    foreignKey: 'gameId'
})

// User-Comment

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'userId'
});

// Post-Comment

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'postId'
})

// Post-Tag

Post.belongsToMany(Tag, {
    through: PostTag,
    foreignKey: 'postId'
});

Tag.belongsToMany(Post, {
    through: PostTag,
    foreignKey: 'tagId'
});

// Game-Genre

Game.belongsTo(Genre, {
    foreignKey: 'genreId'
})

Genre.hasMany(Game, {
    foreignKey: 'genreId'
})

module.exports = { User, Post, Tag, Comment, Game, Genre, PostTag }