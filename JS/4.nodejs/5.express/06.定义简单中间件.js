const express = require('express')

const app = express()



//定义一个简单的中间件
const mw = (req, res, next) => {
    console.log('这是最简单的中间件');
    //把流转关系转交给下一个中间件或者路由
    next()
}

//将mw注册为全局生效的中间件
app.use(mw)

//中间件的简化形式
app.use((req, res, next) => {
    console.log('中间件2');
    //放行
    next()
})

//get请求
app.get('/', (req, res) => {
    res.send('home page')
})
app.get('/user', (req, res) => {
    res.send('user page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})