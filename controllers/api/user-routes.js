// const router = require("express").Router();
var express = require("express");
var router = express.Router();
// requiring in models to access the user model.
const { User } = require("../../models");

// User Login
  //  3001/api/login
router.post("/login", async (req, res) => {
  try {
    const loginUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!loginUserData) {
      res
        .status(400)
        .json({ message: "Incorrect login creditials. Please try again!" });
      return;
    }
    const vaildPassword = await loginUserData.checkPassword(req.body.password);
    if (!vaildPassword) {
      res
        .status(400)
        .json({ message: "Incorrect login creditials. Please try again!" });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      const userID = req.body.loginUserData;

      res
        .status(200)
        .json({ user: loginUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// User Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// New User (create)
router.post("/", async (req, res) => {
  try {
    const loginUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(loginUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
