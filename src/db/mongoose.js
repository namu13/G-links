const mongoose = require("mongoose");
// const localUri = require("../../apiKeys");
const Link_db = require("../models/link");

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to database!");
  })
  .catch((e) => {
    console.log(e);
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
