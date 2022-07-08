//1.导入express
const express = require('express')

//2.创建web服务器
const app = express()

//4.监听客户端的GET和POST请求
app.get('/', (req, res) => {
    //通过req.query可以获取客户端发送过来的 查询参数
    //默认情况下req.query是一个空对象
    console.log(req.query);
    res.send(req.query)
    //{ name: 'zs', age: '20', gender: '18' }
})
//URL地址中,可以通过 :参数名 的形式，匹配动态参数的值
app.get('/user/:id/:username', (req, res) => {
    //req.params 本身是一个空对象，
    // 里面存放着动态匹配的参数值
    console.log(req.params);
    res.send(req.params)
    /*
    单个动态参数：
    { id: '2' }
    { id: '3' }
    { id: '100000221' }
    { id: '1000002213311' }
    { id: '10000022133112111' }
    { id: '1000002213311211110222' }
    
    多个动态参数：
    { id: '1', username: 'zs' }
    */
})
app.get('/user', (req, res) => {
    //调用express提供的res.send()方法响应json对象
    res.send({ 'name': 'zs', 'age': 18, 'gender': '男' })
})
app.post('/user', (req, res) => {
    //调用express提供的res.send()方法响应文本
    res.send('200 ok')
})

//3.启动web服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})