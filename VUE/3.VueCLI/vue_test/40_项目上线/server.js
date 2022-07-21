const express = require('express');
// 解决history模式下刷新页面404问题
const history = require('connect-history-api-fallback');
const app = express();
// 引用history
app.use(history());
app.use(express.static(__dirname + '/static'));


app.listen(5005, (err) => {
    if (!err) {
        console.log('server is running at port 3000');
    }
});