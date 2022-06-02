const express = require('express')
const app = express()

//在这里调用 express.static() 方法，快速对外提供静态资源的访问
// 访问路径: http://127.0.0.1/index.html
app.use(express.static('./clock'))
//挂载路径前缀 访问路径变为: http://127.0.0.1/abc/index.html
app.use('/abc', express.static('./files'))

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})