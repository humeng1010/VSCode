//导入fs 文件系统模块
const fs = require('fs')

//调用fs.writeFile()方法，写入文件内容
//参数一:文件路径
//参数二:文件内容
//[参数三:字符编码]
//参数四:回调函数
str = 'hello nodeJS'
fs.writeFile('./files/2.txt', str, 'utf-8', (err) => {
    //如果文件写入成功则err的值为null
    //如果文件写入失败则err的值为一个错误对象
    if (err) {
        return console.log('写入文件失败！错误信息为：' + err.message);
    }
    return console.log('文件写入成功');

})