const http = require('http')
const server = http.createServer()
//req是请求对象
server.on('request', (req, res) => {
    const url = req.url;
    const method = req.method;
    const str = 'You request url is ' + url + ',and request method is ' + method

    console.log(str);

    //设置响应头，解决中文乱码问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    //调用res.end()方法向客户端响应一些内容
    // res.end(str)
    // res.end('hello world!')
    res.end('<h1>你好，世界！</h1>')

})

server.listen(80, () => {
    console.log('server is running at http://127.0.0.1');
})