const express = require('express')
const app = express()
//导入路由
const router = require('./13.apiRouter')

//write code in here

//----------------请求数据处理-----------------------
//配置express内置的json数据处理
app.use(express.json())
//配置express内置的url-encoded数据
app.use(express.urlencoded({ extended: false }))

//----------------跨域cors-------------------------
//1.安装中间件: npm i cors
//2.导入中间件: cors
const cors = require('cors')
//一定要在路由之前，配置cors这个中间件，从而解决接口跨域的问题
//3.配置cors为全局中间件
app.use(cors())

//----------------路由-------------------------
//把路由模块注册到中间件上
app.use('/api', router)



app.listen(80, () => {
    console.log('http://127.0.0.1');
})