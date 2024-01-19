const express = require('express');
const helpers = require('../utils/helpers');
const withAuth = require('../utils/auth');
const postRoutes = require('/postRoutes');

const router = express.Router();

// format date helper
app.get('/postRoutes', (req, res) => {
    const posts = [
        { title: 'post 1', createdAt: new Date() },
        { title: 'post 2', createdAt: new Date(Date.now() - 3600000)}, // 1 hour ago
        { title: 'post 3', createdAt: new Date(Date.now() - 86400000)}, // 1 day ago
        { title: 'post 4', createdAt: new Date(Date.now() - 2592000000)}, // 30 days ago
    ];

    const formattedPosts = posts.map((post) => {
        return {
            title: post.title,
            formattedDate: helpers.formatDate(post.createdAt),
            relativeTimestamp: helpers.formatTimestamp(post.createdAt),
        };
    });

    //render post with date
    res.render('posts', { posts: formattedPosts });
});