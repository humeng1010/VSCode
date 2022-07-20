const express = require("express");
const randomstring = require("randomstring");
const app = express()

app.get("/getPersonName", (req, res) => {
    console.log("有请求过来了");
    const p = {
        id: randomstring.generate(),
        name: "老八"
    }
    res.send(p);
})



app.listen(80, () => {
    console.log("服务已开启在:http://localhost/getPersonName");
})