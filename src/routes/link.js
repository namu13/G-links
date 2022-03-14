const express = require("express");
const Link = require("../models/link");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/link", auth, async (req, res) => {
  const linkData = new Link({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await linkData.save();
    res.status(201).redirect("/");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
