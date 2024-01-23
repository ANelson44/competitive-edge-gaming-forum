const router = require("express").Router();
const { Genre } = require("../../models");

//* get all genres
router.get("/", async (req, res) => {
    try {
      const genreData = await Genre.findAll({
        attributes: ["id", "name"],
      });
      res.status(200).json(gameData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//* get a genre by ID
router.get("/:id", async (req, res) => {
    try {
      const genreData = await Genre.findByPk(req.params.id, {
        attributes: ["id", "name"],
      });
  
      if (!game) {
        res.status(404).json({ message: "Genre not Found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;