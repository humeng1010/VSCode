//外界使用require()方法导入的自定义模块时，得到的就是module.exports所指向的对象
const m = require('./06.自定义模块')

console.log(m);

/*
node 07.test.js
{ username: 'zs', sayHello: [Function (anonymous)] }
*/