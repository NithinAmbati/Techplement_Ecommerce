const express = require("express");
const router = express.Router();

const loginRouter = require("./login");
const registerRouter = require("./register");
const OtpRouter = require("./sendMail");
const profileRouter = require("./profile");

// Use the routes from the different files

router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/profile", profileRouter);

module.exports = router;
