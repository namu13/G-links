const express = require("express");
const Link = require("../models/link");
const router = new express.Router();

router.post("/link", async (req, res) => {
  try {
    const link = new Link(req.body);
    await link.save();
    res.status(201).redirect("back");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
