const path = require('path')
const fs = require('fs')

//注意 ../ 会抵消前面的一层路径
const pathStr = path.join('/a', '/b/c', '../../', '/d')
// console.log(pathStr);

const pathStr2 = path.join(__dirname, '/1.path.join方法.js')

// console.log(pathStr2);

const pathFile = path.join(__dirname, '../', '1.文件操作fs', 'files', '1.txt')
fs.readFile(pathFile, 'utf-8', (err, data) => {
    if (err) {
        return console.log('失败' + err.message);
    }
    console.log(pathFile + '成功:' + data);
})