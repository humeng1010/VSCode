const fs = require('fs')

//1使用相对路径进行文件读取，局限性是，只能在当前文件所处的位置执行node命令
//比如 我在/Users/humeng/VScode/ 下执行 node ./JS/4.nodejs/1.文件操作fs/05.fs文件路径问题 
//node fs 读取文件路径就会被node拼接为:
//        /Users/humeng/VScode/files/1.txt
// fs.readFile('./files/1.txt', 'utf8', (err, data) => {
//     if (err) {
//         return console.log('文件读取失败');
//     }
//     console.log('读取文件成功' + data);
// })

//2使用绝对路径，不过存在局限性，不推荐使用(移植性差，不便于维护)
// fs.readFile('/Users/humeng/VScode/JS/4.nodejs/1.文件操作fs/files/1.txt', 'utf8', (err, data) => {
//     if (err) {
//         return console.log('文件读取失败');
//     }
//     console.log('读取文件成功' + data);
// })

//3 __dirname 表示当前文件所处的目录
// console.log(__dirname);///Users/humeng/VScode/JS/4.nodejs/1.文件操作fs
fs.readFile(__dirname + '/files/1.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log('文件读取失败');
    }
    console.log('读取文件成功' + data);
})

