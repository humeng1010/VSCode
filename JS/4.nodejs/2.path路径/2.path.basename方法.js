const path = require('path')

const pathname = '/a/b/c/index.html'
//获取文件名
const file = path.basename(pathname)//index.html
console.log(file);

//获取文件名称，移除了文件扩展名
console.log(path.basename(pathname, '.html'))//index

//只获取文件扩展名
console.log(path.extname(pathname));//.html