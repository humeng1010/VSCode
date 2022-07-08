const fs = require('fs')

fs.readFile('./files/11.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.log('读取文件失败!' + err.message);
    }
    return console.log('读取文件成功，文件内容为：' + data);
})