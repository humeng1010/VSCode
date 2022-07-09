// 1.引入fs模块
// import fs from "fs";
const fs = require("fs");

// 2.读取test.md
function readTest() {
    return new Promise((resolve, reject) => {
        fs.readFile("./lib/test.md", (err, data) => {
            // 如果失败
            if (err) reject(err)
            // 成功
            resolve(data)

        })
    })
}

// 2.读取test copy.md
function readTestc() {
    return new Promise((resolve, reject) => {
        fs.readFile("./lib/test copy.md", (err, data) => {
            // 如果失败
            if (err) reject(err)
            // 成功
            resolve(data)

        })
    })
}
// 2.读取test copy2.md
function readTestc2() {
    return new Promise((resolve, reject) => {
        fs.readFile("./lib/test copy 2.md", (err, data) => {
            // 如果失败
            if (err) reject(err)
            // 成功
            resolve(data)

        })
    })
}
// 声明一个async函数 的返回结果除了出错和Promise类型的失败 返回的结果都是Promise类型的成功resolved
async function main() {
    // await 返回的结果是Promise返回结果成功的值
    // await必须写在async函数中
    // await右侧可以放一个Promise对象
    // await返回的是Promise成功的值
    // await的Promise失败了，就会抛出异常 ，需要通过try...catch捕获处理
    try {
        let test = await readTest();
        let testc = await readTestc();
        let testc2 = await readTestc2();

        console.log(test.toString());
        console.log(testc.toString());
        console.log(testc2.toString());
    } catch (error) {
        console.error(error);
    }

}

main();