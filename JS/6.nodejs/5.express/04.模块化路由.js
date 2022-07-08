const express = require('express')
const app = express()

//导入路由模块
const ruoter = require('./05.ruoter')

//注册路由模块
app.use(ruoter)
//为路由添加访问前缀
app.use('/api', ruoter)
//app.use('')就是注册全局中间件
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})