const mysql = require('mysql')

const connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'test'
})


const selSql = 'select * from user'

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
