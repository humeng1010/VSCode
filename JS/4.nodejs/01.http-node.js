//导入http模块
const http = require('http');
//创建web服务器实例
const server = http.createServer();
//为服务器绑定request时间
server.on('request', function (req, res) {
    console.log('someone visit our web server');
});

//启动服务器
server.listen(80, function () {
    console.log('server running at http://127.0.0.1');
})