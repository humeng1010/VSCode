const express = require('express')
const app = express()

//在路由之前配置中间件(除了错误中间件，其他中间件都必须在路由之前配置)
//通过express.json() 解析post请求体的json数据
app.use(express.json())
//通过express.urlencoded()中间件解析表单中的url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))
app.post('/user', (req, res) => {
    //在服务端可以使用req.body 接收请求体数据
    //默认情况下，如果不配置解析表单数据的中间件 则req.body 默认等于undefined
    console.log(req.body);

    res.send('ok')
})

app.post('/book', (req, res) => {
    console.log(req.body);
    res.send('ok')
})


app.listen(80, () => {
    console.log('http://127.0.0.1');
})