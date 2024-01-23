const express = require('express');
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

const router = express.Router();

// ? This should not be needed. The current helpers look to be set up ready to use in handlebars
// // format date helper
// app.get('/postRoutes', (req, res) => {
//     const posts = [
//         { title: 'post 1', createdAt: new Date() },
//         { title: 'post 2', createdAt: new Date(Date.now() - 3600000)}, // 1 hour ago
//         { title: 'post 3', createdAt: new Date(Date.now() - 86400000)}, // 1 day ago
//         { title: 'post 4', createdAt: new Date(Date.now() - 2592000000)}, // 30 days ago
//     ];

//     const formattedPosts = posts.map((post) => {
//         return {
//             title: post.title,
//             formattedDate: helpers.formatDate(post.createdAt),
//             relativeTimestamp: helpers.formatTimestamp(post.createdAt),
//         };
//     });

//     //render post with date
//     res.render('posts', { posts: formattedPosts });
// });

router.post("/", withAuth, async (req, res) => {
    try {    
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      // Send a response with the new comment data
      res.status(200).json(newComment);
    } catch (err) {
      // Send an error response if something went wrong
      res.status(400).json(err);
    }
  });
  
  module.exports = router;