const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.get("/users/login", (req, res) => {
  res.render("login");
});

router.post("/users/login", async (req, res) => {
  // const user = await user.findByCredentials();
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  const token = await user.generateAuthToken();
  try {
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
