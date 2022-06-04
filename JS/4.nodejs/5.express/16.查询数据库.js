const mysql = require('mysql')

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'test'
})


const selSql = 'select * from user where id = 1'

//查询
connection.query(selSql, (err, result) => {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message)
        return
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
})

//插入
const user = { id: 10, name: 'an', age: 20, status: 1, gender: '男' }
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