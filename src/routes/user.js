const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();

const cookieOptions = {
  sameSite: "strict",
  httpOnly: true,
  secure: true,
};

router.post("/users/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    const token = await user.generateAuthToken();
    res.cookie("authToken", token, cookieOptions);
    res.redirect("/");
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/users/login", (req, res) => {
  if (req.cookies.authToken) {
    return res.redirect("/");
  }
  res.render("login");
});

router.get("/users/signup", (req, res) => {
  res.render("signup");
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();

    res.cookie("authToken", token, cookieOptions);
    res.redirect("/");
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users/me", auth, async (req, res) => {
  try {
    await req.user.populate("links");
    const user = req.user.toObject();
    delete user.password;
    delete user.tokens;

    res.render("settings", req.user);
  } catch (e) {
    res.send(e);
  }
});

router.post("users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.clearCookie("authToken");
    res.redirect("/");
  } catch (e) {
    res.status(400).send();
  }
});

router.post("users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie("authToken");
    res.redirect("/");
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
