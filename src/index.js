const express = require("express");
const path = require("path");
require("../src/db/mongoose");
const Link_db = require("../src/db/mongoose");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", async (req, res) => {
  // const link_db = await Link_db.find({});
  res.sendFile(path.join(__dirname, "..", "public", "html", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is listening at prot ${port}`);
});
