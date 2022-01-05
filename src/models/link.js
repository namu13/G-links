const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
});

const Link_db = mongoose.model("link_db", linkSchema);

module.exports = Link_db;
