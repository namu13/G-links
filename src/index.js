const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const mainRouter = require("../src/routes/main");
const userRouter = require("./routes/user");
const linkRouter = require("./routes/link");
require("../src/db/mongoose");

const app = express();
const port = process.env.PORT || 4000;

const publicDirectioryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

app.set("view engine", "pug");
app.set("views", viewsPath);

app.use(express.static(publicDirectioryPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(mainRouter);
app.use(userRouter);
app.use(linkRouter);

app.listen(port, () => {
  console.log(`Server is listening at prot ${port}`);
});

// api 로그인 추가
// 토큰 쿠키에 저장 완료
// db ref로 연결
