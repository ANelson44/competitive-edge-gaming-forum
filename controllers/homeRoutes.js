const router = require("express").Router();
const { Game, User, Post, Genre, Comment } = require('../models');
const withAuth = require("../utils/auth");

// //* Route to render Main page
// router.get('/', (req, res) => {
//   res.render('main');
// });

//* Route to render homepage
router.get('/', async (req, res) => {
  try {
    // Find all games with associated names
const gamesData = await Game.findAll({

});

const games = gamesData.map((game) => game.get({ plain: true }));
  res.render('homepage', { games });
} catch (err) {
  res.status(500).json(err);
}
});

//* Route to render individual game page with all posts
router.get("/game/:id", withAuth, async (req, res) => {
  try {
    // Find game by ID with associated name and posts with associated usernames
    const gameData = await Game.findByPk(req.params.id,); 

    // Convert game data to plain JavaScript object
    const game = gameData.get({ plain: true });

    try {
      const postsData = await Post.findAll({
        where: { gameId: req.params.id },
        include: [{ model: User, attributes: ['username'] }],
      });

      const posts = postsData.map(post => post.get({ plain: true }));

      // Respond with JSON data (USED FOR INSOMNIA TESTING)
      res.json({ game, posts });

      // Render game template with game data and posts data
      res.render("game", {
        game,
        posts,
      });
    } catch (err) {
      // If there is an error, return 500 status code and error message
      console.log(err);
      res.status(500).json(err);
    }
  } catch (err) {
    // If there is an error, return 500 status code and error message
    console.log(err);
    res.status(500).json(err);
  }
});

//* Route to render individual post page with all comments
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    // Find post by ID with associated user and comments with associated usernames
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        { model: Comment, include: [{ model: User, attributes: ["username"] }] },
      ],
    });

    // If the post is not found, handle the case
    if (!postData) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Convert post data to plain JavaScript object
    const post = postData.get({ plain: true });

     // Respond with JSON data (FOR INSOMNIA TESTING)
     res.json({ post });

    // Render post template with post data
    // res.render("post", {
    //   post,
    // });
  } catch (err) {
    // If there is an error, return 500 status code and error message
    console.error(err);
    res.status(500).json({ error: "Internal Server Error"});
  }
});

//* router to render signup page
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }
  res.render("signup");
});

//* Route to render login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }
  res.render("login");
});

//* Route to render new post page
router.get("/newpost", (req, res) => {
  if (req.session.logged_in) {
    res.render("newpost");
    return;
  }
  res.redirect("/login");
});

//* Route to render edit post page
router.get("/editpost/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("editpost", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add more routes if needed

module.exports = router;