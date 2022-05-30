//导入fs模块
const fs = require('fs')

//调用fs读取文件
//参数一：文件相对路径
//参数二：字符编码utf-8
//参数三：回调函数，拿到读取失败和成功的结果 err data
fs.readFile('./files/1.txt', 'utf-8', (err, data) => {
    //打印失败的结果
    console.log(err);
    console.log('-------');
    //打印成功的结果
    console.log(data);
})

/*
运行结果:

node 01.使用readFile读取文件的内容.js 
null
-------
111

*/
