const mysql = require('mysql')
const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'test'
})

//删除数据
const delSql = 'delete from user where id = 16'
connection.query(delSql, (err, result) => {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
})