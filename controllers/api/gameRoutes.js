const router = require("express").Router();
const { Game } = require("../../models");

//* get all games
router.get("/", async (req, res) => {
  try {
    const gameData = await Game.findAll({
      attributes: ["id", "name"],
    });
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//* get a game by ID
router.get("/:id", async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      attributes: ["id", "name"],
    });

    res.status(200).json(gameData);

    if (!gameData) {
      res.status(404).json({ message: "Game not Found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
