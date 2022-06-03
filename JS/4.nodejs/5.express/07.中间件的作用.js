const express = require('express')

const app = express()



//定义一个简单的中间件
//中间件的简化形式
app.use((req, res, next) => {
    //获取每个请求的时间
    const time = Date.now()
    //挂载时间
    req.startTime = time
    //放行
    next()
})

//get请求
app.get('/', (req, res) => {
    res.send('home page' + req.startTime)
})
app.get('/user', (req, res) => {
    res.send('user page' + req.startTime)
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})