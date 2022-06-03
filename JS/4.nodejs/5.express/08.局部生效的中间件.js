const express = require('express')
const app = express()

//判断账户是否为root
const mw1 = (req, res, next) => {
    if (req.query.name == 'root')
        return next()
    console.log('局部生效的中间件1:账户错误');
}
//判断密码是否为123456
const mw2 = (req, res, next) => {
    if (req.query.password == '123456')
        return next()
    console.log('局部生效的中间件2:密码错误');
}
//中间件只会在该请求路径中生效
app.get('/', mw1, mw2, (req, res) => {
    res.send('登陆成功! Home page')
})

//中间件不会再该请求路径中生效，因为没有使用app.use(mw)注册为全局中间件
app.get('/user', (req, res) => {
    res.send('user page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})