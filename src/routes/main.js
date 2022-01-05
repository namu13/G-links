const express = require("express");
const Link_db = require("../models/link");
const router = new express.Router();

router.get("/", async (req, res) => {
  const link_db = await Link_db.find({ class: "혜화" });
  const names = [];
  link_db.forEach((item) => {
    if (!names.includes(item.name)) {
      names.push(item.name);
    }
  });

  res.render("index", { link_db, names });
});

module.exports = router;
