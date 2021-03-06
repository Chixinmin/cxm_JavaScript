const express = require("express");
const app = express();

// 使用使用自定义的中间件接收post数据
const csBodyParse = require("./middlewares/csBody");
app.use(csBodyParse);


// 启动
app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});