const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");
const bcrypt = require("bcrypt");

//* Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//* Get user by ID
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

//* Create new User (User Registration)
router.post("/signup", async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Validate input (add more conditions as needed)
      if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
      }
  
      // Check if the username is already taken
      const existingUser = await User.findOne({
        where: { username: username },
      });
  
      if (existingUser) {
        return res.status(400).json({ error: "Username already taken" });
      }
  
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = await User.create({
        username,
        password: hashedPassword,
      });
  
      // Save user information in the session
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;
  
        res.status(200).json(newUser);
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

//* Delete a User
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!deletedUser) {
            res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted"});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    };
});

//* Login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userData = await User.findOne({ where: { username } });

        if (!userData) {
            return res.status(404).json({ message: "Incorrect username or password, please try again" });
        }

        const isPasswordValid = await userData.checkPassword(password)
        // await bcrypt.compare(password, user.password);
        console.log('Entered password:', password);
        console.log('Hashed password from DB:', userData.password);
        console.log("isPasswordValid:", isPasswordValid);

        if (!isPasswordValid) {
            console.error("Invalid Password");
            return res.status(401).json({ message: "Incorrect email or password, please try again"});
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.logged_in = true;

        });
        
       

        return res.status(200).json({ message: "Login Successful", user: userData });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    };
});

//* Logout
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