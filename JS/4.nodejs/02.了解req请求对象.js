const http = require('http')
const server = http.createServer()
//req是请求对象
server.on('request', (req) => {
    const url = req.url;
    const method = req.method;
    const str = 'You request url is ' + url + ',and request method is ' + method

    console.log(str);

})

server.listen(80, () => {
    console.log('server is running at http://127.0.0.1');
})