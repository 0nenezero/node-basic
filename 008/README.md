# 미들웨어 등록 순서

1. 필요한 패키지 임포트 (ex. express, body-parser 등)
2. express 인스턴스 생성
3. 라우트, 오류 처리 등의 미들웨어 등록
4. 라우트 코드, 라우터 미들웨어 등록
5. 오류 처리 미들웨어 등록
6. 서버 시작

```js
// app.js

// 1
const express = require("express");
const app = express(); // 2
const PORT = 3000;

// 3
const router = express.Router();
const errorhandler = require("./middleware/errorhandler");

// 4
app.get("/", (req, res) => {
  res.status(200).send("Hello Node!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRouter"));

// 5
app.use(errorhandler);

// 6
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```
