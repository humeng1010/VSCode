//导入http模块
const http = require('http')
//导入fs模块
const fs = require('fs')
//导入path模块
const path = require('path')

//创建web服务器实例对象
const server = http.createServer()

//监听web服务器的request事件
server.on('request', (req, res) => {
    //获取客户端请求的url地址
    // /clock/index.html
    // /clock/index.css
    // /clock/index.js
    const url = req.url
    //把请求的url地址映射为 具体文件的存放路径(本地文件存放路径)
    // const fpath = path.join(__dirname, url)

    //预定义一个空白的文件存放路径
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        // index.html
        // index.css
        // index.js

        fpath = path.join(__dirname, '/clock', url)
    }

    //通过映射过来的文件路径读取文件内容
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        //读取失败，向客户端响应404
        if (err) {
            return res.end('404 Not found!')
        }
        //读取成功，将读取的内容，响应给客户端
        res.end(dataStr)
    })

})
//启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})
