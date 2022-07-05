const express = require('express')
const router = express.Router()



router.get('/get', (req, res) => {
    //通过req.query获取客户端通过查询字符串，发送到客户端的数据
    const query = req.query
    // console.log(query);
    res.send({
        status: 0,//0 成功 1 失败
        msg: 'GET请求成功!',//状态描述
        data: query//响应数据
    })
})

router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST请求成功!',
        data: body
    })
})



module.exports = router