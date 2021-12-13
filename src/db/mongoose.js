const mongoose = require("mongoose");
const uri = require("../../apiKeys");

mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to database!");
  })
  .catch((e) => {
    console.log(e);
  });

const Link_db = new mongoose.model("link_db", {
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

// Link_db.find({ name: "도령" }).then((data) => {
//   console.log(data);
// });

// const link_db = new Link_db({
//   name: "몰라",
//   class: "혜화",
//   title: "2021 M4 수학 학습지",
//   url: "https://www.icloud.com/numbers/0WWnoQITF12vuVu0M6_ukPpSQ",
// });

// link_db.save();

module.exports = Link_db;
