const router = require("express").Router();
const { Games } = require("../models");

// get all games
router.get("/", async (req, res) => {
  try {
    const gameData = await Games.findAll({
      attributes: ["id", "title"],
    });
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a game by ID
router.get("/:id", async (req, res) => {
  try {
    const gameData = await Games.findByPk(req.params.id, {
      attributes: ["id", "title"],
    });

    if (!game) {
      res.status(404).json({ message: "Game not Found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
