const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html", "index.html"));
  // res.render(`${__dirname}/public/html/index.html`);
});

app.listen(port, () => {
  console.log(`Server is listening at prot ${port}`);
  console.log(path.join(__dirname, "..", "public", "html", "index.html"));
});
