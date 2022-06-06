const mysql = require('mysql')

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'test'
})

//开发接口
const express = require('express')
const app = express()

//处理post和urlencode请求
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//跨域
const cors = require('cors')
app.use(cors())
//中间件
//更新时间
const updateTime = (req, res, next) => {
    //获取req中的json数据，为更新时间赋值
    const date = new Date()
    console.log(date);

    next()

}
//创建和更新时间
const create_update_time = (req, res, next) => {
    //获取req中的json数据，为更新和创建时间赋值
    const date = new Date()
    console.log(date);

    next()

}


//查询用户基本信息
app.get('/user', updateTime, (req, res) => {
    const selSql = 'select * from node_user'
    connection.query(selSql, (err, result) => {
        if (err) {
            return console.log('查询错误');
        }

        console.log('所有用户基本信息如下:', result);
        res.send(result)
    })
})

//根据id查询用户
app.get('/user/:id', (req, res) => {
    const selSql = 'select * from node_user where id = ?'
    const id = req.params.id

    connection.query(selSql, id, (err, result) => {
        if (err) {
            return console.log('查询失败');
        }
        console.log(result);
        res.send(result)
    })

})


//开启80端口
app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
    //测试数据库是否接通
    connection.query('select 1', (err, result) => {
        if (err) {
            return console.log('ERROR:' + err.message);
        }
        console.log(result, '数据库正常');
    })
})