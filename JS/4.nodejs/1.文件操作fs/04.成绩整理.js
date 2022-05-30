//1.导入fs文件操作模块
const fs = require('fs')

//读取成绩文件
fs.readFile('./files/3.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log('文件不存在' + err.message);
    }
    var arrOld = data.split(' ')
    // console.log(arrOld)

    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    const newStr = arrNew.join('\r\n')
    // console.log(newStr)

    fs.writeFile('./files/4.txt', newStr, 'utf-8', (err) => {
        if (err) {
            return console.log('写入文件错误' + err.message);
        }
        return console.log('写入文件成功,内容为:\n' + newStr);
    })


})