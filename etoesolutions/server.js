const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});
