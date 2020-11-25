// 导入
const querystring = require("querystring");
const fs = require("fs");
const os = require("os");
// 定义中间件（本质就是一个函数）
const csBodyParse = (req, res, next) => {
    let userIp = req.ip;
    let time = Date.now();
    let userUrl = req.url;
    let raw = req.headers['user-agent'];
    let method = req.method;
    let date = new Date();
    let str = `./logs/${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}.log`;
    let arr = [userIp, time, userUrl, raw, method, os.EOL];
    let userString = arr.join('|');
    fs.appendFile(str, userString, () => {
    })
};

// 导出
module.exports = csBodyParse;
