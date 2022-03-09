const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  const token = await user.generateAuthToken();
  try {
    res.status(201).cookie("authToken", token, {
      httpOnly: true,
      secure: true,
      signed: true,
    });
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
    res.cookie("authToken", token, {
      sameSite: "strict",
      httpOnly: true,
      secure: true,
    });
    res.redirect("/");
    console.log(req.cookies);
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
  const isValidOperation = updates.filter((item) => {
    allowedList.includes(item);
  });
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    updates.forEach((item) => {
      req.user[item] = req.body[item];
    });
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
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
