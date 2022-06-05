const mysql = require('mysql')
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'test'
})

//修改数据
const user = { name: 'zhangsan', age: 100, id: 16 }
const updSql = 'update test.user set name = ?,age = ? where id = ?'

connection.query(updSql, [user.name, user.age, user.id], (err, result) => {
    if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows', result.affectedRows);
    console.log('UPDATE', result);
    console.log('-----------------------------------------------------------------\n\n');
})