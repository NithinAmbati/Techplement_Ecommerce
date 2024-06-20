const express = require("express");
const router = express.Router();
const { User, Admin } = require("./startMongoose");

router.post("/user", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username, email });
    if (existingUser) {
      res.status(400).send("User already exists");
      return;
    }
    // Create new user
    const newUser = new User({ username, password, email });
    await newUser.save();

    res.status(200).send("Registration Successful");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/admin", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Check if user already exists
    const existingUser = await Admin.findOne({ username, email });
    if (existingUser) {
      res.status(400).send("User already exists");
      return;
    }

    // Create new user
    const newUser = new Admin({ username, password, email });
    await newUser.save();

    res.status(200).send("Registration Successful");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
