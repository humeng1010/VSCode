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

//局部中间件
//修改用户(put)更新时间
const updateTime = (req, res, next) => {
    //获取req中的json数据，为更新时间赋值
    const date = new Date()
    console.log(date);
    req.body.update_time = date;



    next()

}
//创建用户(post)和更新时间
const create_update_time = (req, res, next) => {
    //获取req中的json数据，为更新和创建时间赋值
    const date = new Date()
    console.log(date);
    req.body.create_time = date;
    req.body.update_time = date;


    next()

}


//查询用户基本信息
app.get('/user', (req, res) => {
    const selSql = 'select * from node_user'
    connection.query(selSql, (err, result) => {
        if (err) {
            return console.log('查询错误');
        }

        console.log('所有用户基本信息如下:', result);
        res.send(result)
    })
})

//根据id查询用户基本信息
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

//添加用户基本信息
app.post('/user/add', create_update_time, (req, res) => {
    const delSql = 'insert into node_user (name, password, create_time, update_time, is_delete) values(?, ?, ?, ?, ?)'
    const user = {
        name: req.body.name,
        password: req.body.password,
        create_time: req.body.create_time,
        update_time: req.body.update_time,
        is_delete: 0
    }
    connection.query(delSql, [user.name, user.password, user.create_time, user.update_time, user.is_delete], (err, result) => {
        if (err) {
            res.send('添加失败')
            return console.log('添加失败');
        }
        console.log(result);
        res.send(result)
    })
})

//修改用户基本信息
app.put('/user/update', updateTime, (req, res) => {


    const updSql = 'update node_user set name = ? ,password = ?,update_time = ?,is_delete = ? where id = ?'
    const user = {
        id: req.body.id,
        name: req.body.name,
        password: req.body.password,
        update_time: req.body.update_time,
        is_delete: 0
    }

    connection.query(updSql, [user.name, user.password, user.update_time, user.is_delete, user.id], (err, result) => {
        if (err) {
            console.log('修改失败');
            return res.send('修改失败')
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