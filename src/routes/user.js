const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  const token = await user.generateAuthToken();
  try {
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/users/login", (req, res) => {
  res.render("login");
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(400).send();
  }
});

router.post("users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(400).send();
  }
});

router.patch("/users/me", auth, async (req, res) => {
  const allowedList = ["nickname", "email", "password"];
  const updates = Object.keys(req.body);
  console.log(updates);

  res.send();
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
