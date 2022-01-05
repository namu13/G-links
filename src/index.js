const path = require("path");
const express = require("express");
const mainRouter = require("../src/routes/main");
const userRouter = require("./routes/user");
require("../src/db/mongoose");

const app = express();
const port = process.env.PORT || 4000;

const publicDirectioryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

app.set("view engine", "pug");
app.set("views", viewsPath);

app.use(express.static(publicDirectioryPath));
app.use(express.json());
app.use(mainRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is listening at prot ${port}`);
});

// 로그인 페이지 만들기
// signup post req (구현이 되었으나 db에 동일한 메일 주소가 들어오면 서버가 멈추는 에러가 발생)
// when user signup generate token
// when user signup or modify password, hash password
