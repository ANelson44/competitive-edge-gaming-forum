const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
// const threadRoutes = require('./threadRoutes');
const commentRoutes = require('./commentRoutes');
const gameRoutes = require ('./gameRoutes');
// const genreRoutes = require ('./genreRoutes');
// const postTagRoutes = require ('./postTagRoutes');
// const tagRoutes = require ('./tagRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
// router.use('/threads', threadRoutes);
router.use('/comments', commentRoutes);
router.use('/games', gameRoutes);
// router.use('/genres', genreRoutes);
// router.use('/postTags', postTagRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;