//导入http模块
const http = require("http");
const path = require("path");
const fs = require("fs");
//创建web服务
const server = http.createServer();
//监听request请求
server.on("request", (req, res) => {
    //获取数据地址
    let pathname = req.url;
    //给pathname赋值 对"/"进行判断
    pathname = pathname === "/" ? "/index.html" : pathname;
    // 图标的处理
    let filename = path.join(__dirname, "public", pathname);
    //读取文件内容并输出
    fs.readFile(filename, (err, data) => {
        if (err) {
            //读取文件错误
            res.statusCode = 500;
            res.end("error");
        } else {
            // 读取文件成功
            res.end(data);
        }
    });

});
// 启动服务
server.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});