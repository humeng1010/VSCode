// 读取lib下的test文件并输出
const fs = require("fs");

// 2.调用方法读取文件
// fs.readFile("./lib/test.md", (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

// 3.使用Promise封装
const p = new Promise((resolve, reject) => {
    // 异步操作
    fs.readFile("./lib/test.md", "utf-8", (err, data) => {
        if (err) {
            // 改变Promise的状态 并传递错误信息
            reject(err)
        } else {
            // 改变Promise的状态 并传递成功数据
            resolve(data)
        }
    })
}).then((value) => {
    console.log(value.toString());
}).catch((reason) => {
    console.log("读取失败");
    console.error(reason);
})
