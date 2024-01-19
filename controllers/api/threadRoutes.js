const router = require("express").Router();
const { Thread, User } = require("../models");
const withAuth = require("../utils/auth");

// get all threads
router.get("/", async (req, res) => {
    try {
        const threads = await Thread.findAll({
            include: [{ model: User, attributes: ['username'] }],
        });
        res.status(200).json(threads);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error"});
    };
});

// get thread by ID
router.get("/:id", async (req, res) => {
    try {
        const thread = await Thread.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username'] }],
        });

        if (!thread) {
            res.status(404).json({ message: "Thread not found" });
        }
    res.status(200).json(thread);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error"});
    };
});

// Create new thread
router.post("/", async (req, res) => {
    try {
        const newThread = await Thread.create({ title, content, user_id });
        res.status(200).json({ message: "New Thread created!"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error"});
    };
});

module.exports = router