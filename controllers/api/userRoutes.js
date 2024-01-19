const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");
const bcrypt = require("bcrypt");

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get user by ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            res.status(404).json({ error: "User not found" });
        }

    res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Create new User
router.post("/", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            password: hashedPassword,
        });

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;

            res.status(200).json(newUser);
        });
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    };
});

// Delete a User
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const deletedUser = await User.destroy(req.params.id);

        if (!deletedUser) {
            res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    };
});

// Login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            res.status(404).json({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            res.status(401).json({ error: "Invalid Username or Password"});
        }

        req.session.user = {
            id: user.id,
            username: user.username,
            password: user.password,
        };

        res.status(200).json({ message: "Login Successful", user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    };
});

// Logout
router.post("/logout", async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Internal Sever Error" });
        } else {
            res.status(200).json({ message: "Logout Successful" });
        }
    });
});

module.exports = router;