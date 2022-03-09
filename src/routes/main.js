const express = require("express");
const Link = require("../models/link");
const router = new express.Router();

router.get("/", async (req, res) => {
  const link = await Link.find();
  const teachers = [];
  link.forEach((item) => {
    if (!teachers.includes(item.teacher)) {
      teachers.push(item.teacher);
    }
  });

  res.render("index", { link, teachers });
});

module.exports = router;
