const express = require("express");
const User = require("../models/user");
const Auth = require("../middleware/auth");
const router = new express.Router();

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

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  const token = await user.generateAuthToken();
  try {
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send(e);
  }
});

// router.patch("/users", Auth, async (req, res) => {
//   const list = [nickname, email, password];
//   const updates = Object.keys(req.body);
//   console.log(updates);
//   res.send(updates);
//   // list.forEach((list) => {

//   // })
// });

module.exports = router;
