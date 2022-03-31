const express = require("express");
const mongoose = require("mongoose");
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

router.delete("/link/:id", auth, async (req, res) => {
  const _id = mongoose.Types.ObjectId(req.params.id);

  try {
    const link = await Link.findOneAndDelete({ _id, owner: req.user._id });

    if (!link) {
      return res.status(404).json({ message: "Link not found", error: true });
    }
  } catch (e) {
    res.status(500);
  }
});

module.exports = router;
