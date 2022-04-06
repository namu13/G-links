const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
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
app.use(methodOverride("_method"));

app.use(cookieParser());

app.use(mainRouter);
app.use(userRouter);
app.use(linkRouter);

app.listen(port, () => {
  console.log(`Server is listening at prot ${port}`);
});

// 링크 카테고리 버튼 삭제
// 로그인이 안되어있을 떄 설정 페이지 들어가면 메인으로 redirect
