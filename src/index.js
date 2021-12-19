const path = require("path");
const express = require("express");
const Link_db = require("../src/db/mongoose");
require("../src/db/mongoose");

const app = express();
const port = process.env.PORT || 4000;

const publicDirectioryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

app.set("view engine", "pug");
app.set("views", viewsPath);

app.use(express.static(publicDirectioryPath));

app.get("/", async (req, res) => {
  const link_db = await Link_db.find({ class: "혜화" });
  const names = [];
  link_db.forEach((item) => {
    if (!names.includes(item.name)) {
      names.push(item.name);
    }
  });

  res.render("index", {
    link_db,
    names,
  });
});

app.listen(port, () => {
  console.log(`Server is listening at prot ${port}`);
});
