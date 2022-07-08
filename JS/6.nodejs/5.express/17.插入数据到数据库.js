const mysql = require('mysql')
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'test'
})

//插入数据
//用户信息
const user = { id: 16, name: 'ansanne', age: 22, status: 1, gender: '男' }
//sql
const insSql = 'insert into test.user (id, name, age, status, gender) values(?,?,?,?,?)'

connection.query(insSql, [user.id, user.name, user.age, user.status, user.gender], (err, result) => {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }

    if (result.affectedRows === 1) {
        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);        
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    }

})

