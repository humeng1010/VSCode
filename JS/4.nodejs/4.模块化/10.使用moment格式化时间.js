//1. 下载dayjs包——npm i[nstall] dayjs

//2. 导入包
const dayjs = require('dayjs')

//3. 调用dayjs的方法格式化时间
const dt = dayjs().format('YYYY-MM-DD HH:mm:ss')

console.log(dt);//2022-06-01 10:42:58

console.log(dayjs('2022-06-01'));
