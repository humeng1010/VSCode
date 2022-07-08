const express = require('express')
const app = express()

//定义路由
app.get('/', (req, res) => {
    //制造错误
    // a = 10 / 0
    throw new Error('服务器内部发生错误')
    //响应
    res.send('Home page')
})

//定义错误中间件，捕获整个项目的异常错误信息 从而防止程序的崩溃
app.use((err, req, res, next) => {
    console.log('发生了错误:' + err.message);
    res.send('Error:' + err.message)
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})