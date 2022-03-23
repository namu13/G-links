const mongoose = require("mongoose");
const User = require("./user");

const linkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      maxlength: 20,
    },
    link: {
      type: String,
      required: true,
      unique: true,
    },
    year: {
      type: Number,
      required: true,
      min: 2017,
      max: new Date().getFullYear(),
    },
    module: {
      type: Number,
      required: true,
      min: 1,
      max: 4,
    },
    teacher: {
      type: String,
      required: true,
      enum: ["몰라", "수선", "예티", "도령", "히치", "쩜백", "은열", "라라"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Link = mongoose.model("link", linkSchema);

module.exports = Link;
