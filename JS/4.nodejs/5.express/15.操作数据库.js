//1.导入mysql模块
const mysql = require('mysql')
//建立与mysql的连接
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP地址
    user: 'root',//登陆数据库的账号
    password: '12345678',//登陆数据库的密码
    database: 'test'//指定操作哪个数据库
})

//最新的mysql模块并未完全支持MySQL 8的“caching_sha2_password”加密方式，
//而“caching_sha2_password”在MySQL 8中是默认的加密方式。
//解决办法:
//更改加密方式：修改加密规则为普通模式，默认是严格加密模式
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// 'password'是你的数据库密码
db.query('select 1', (err, results) => {

    if (err) return console.log(err.message)

    console.log(results)

})