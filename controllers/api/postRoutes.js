const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

//* Get all posts by username
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* Get post by ID
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["username"] }],
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* Create post
router.post("/", withAuth, async (req, res) => {
  // Check if the user is logged in
  if (!req.session.userId) {
    return res.status(401).json({ error: "User not logged in" });
  }

  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });


    res.status(200).json({ message: "Post created!", newPost });
  } catch (err) {
    res.status(400).json(err);
  }
});

//* Edit post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const editPost = await Post.update(req.body, {
      where: { id: req.params.id },
    });

    if (!editPost) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }
    res.status(200).json({ message: "Post has been updated!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

//* Delete post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
