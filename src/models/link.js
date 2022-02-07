const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
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
  class: {
    type: String,
    required: true,
    enum: ["혜화랩", "알파랩"],
  },
  teacher: {
    type: String,
    required: true,
    enum: ["몰라", "수선", "예티", "도령", "히치", "쩜백", "은열", "라라"],
  },
});

const Link = mongoose.model("link", linkSchema);

/*
name
:
"몰라"
class
:
"혜화"
title
:
"2021 M4 수학 학습지"
url
:
"https://www.icloud.com/numbers/0WWnoQITF12vuVu0M6_ukPpSQ"

name
:
"쩜백"
class
:
"혜화"
title
:
"2021 M4 주제 중심"
url
:
"https://www.icloud.com/numbers/0WWnoQITF12vuVu0M6_ukPpS"

name
:
"쩜백"
class
:
"혜화"
title
:
"2021 M4 주제 중심 1팀"
url
:
"https://www.icloud.com/numbers/0WWnoQITF12vuVu0M6_ukPp"
*/

module.exports = Link;
