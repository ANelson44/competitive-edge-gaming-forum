const express = require('express');
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');
const router = express.Router();

// Create a new comment
router.post("/", withAuth, async (req, res) => {
    try {  
      console.log('User ID in session:', req.session.userId);  
      const newComment = await Comment.create({
        ...req.body,
        userId: req.session.userId,
      });
      
      // Send a response with the new comment data
      res.status(200).json(newComment);
    } catch (err) {
      // Send an error response if something went wrong
      res.status(400).json(err);
    }
  });
  
  module.exports = router;