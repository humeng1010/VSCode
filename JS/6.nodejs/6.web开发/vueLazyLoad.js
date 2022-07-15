const express = require('express');
const fs = require('fs');


const app = express();


app.get("/:s/vue.js", (req, res) => {
    const p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            fs.readFile(__dirname + "/vue.js", (err, data) => {
                if (err) {
                    reject(err)
                    return console.log('读取文件失败!' + err.message);
                }
                // return console.log('读取文件成功，文件内容为：' + data);

                resolve(data)
                // console.log(req.params.s);



            })

            // return res.send(data);
        }, parseInt(req.params.s));

    });
    p.then(value => {
        res.send(value);
    }).catch(err => {
        res.send(err);
    })



})

app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})