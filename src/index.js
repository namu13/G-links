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

// 회원가입 FE 완성
// 회원가입 cookie 발행 완료
// 토큰이 있으면 /users/login 라우팅에 접근 불가 설정하여 토큰 계속 누적 방지
