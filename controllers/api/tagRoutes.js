const router = require("express").Router();
const { Tag } = require("../../models");
const withAuth = require("../../utils/auth");

//* get all tags
router.get("/", async (req, res) => {
    try {
      const tagData = await Tag.findAll({
        attributes: ["id", "name"],
      });
      res.status(200).json(gameData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//* get a tag by ID
router.get("/:id", async (req, res) => {
    try {
      const genreData = await Tag.findByPk(req.params.id, {
        attributes: ["id", "name"],
      });
  
      if (!game) {
        res.status(404).json({ message: "Tag not Found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//*   Create a tag
  router.post("/", withAuth, async (req, res) => {
    try {    
      const newTag = await Tag.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      // Send a response with the new comment data
      res.status(200).json(newTag);
    } catch (err) {
      // Send an error response if something went wrong
      res.status(400).json(err);
    }
  });
  
  module.exports = router;