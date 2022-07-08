// console.log(exports)

// console.log(module.exports)

// console.log(exports === module.exports)//true
// const username = 'zs'
// module.exports.username = username

// exports.age = 20

// exports.sayHello = function () {
//     console.log('hello');
// }

//  时刻谨记住：使用require('')导入模块时，得到的永远都是module.exports 指向的对象

// module.exports = {
//     name: 'zs',
//     password: '123456'
// }

// exports.name = 'ls'

// module.exports = {
//     name: 'wangwu',
//     password: '12222'
// }

exports = {
    username: 'zs',
    gender: '男'
}
module.exports = exports
module.exports.age = 20
