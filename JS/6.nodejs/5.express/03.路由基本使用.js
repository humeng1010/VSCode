const express = require('express')

const app = express()

//挂载路由

app.get('/', (req, res) => {
    res.send('hello get')
})

app.post('/', (req, res) => {
    res.send('hello post')
})

//启动80端口
app.listen(80, () => {
    console.log('express servere running at http://127.0.0.1');
})