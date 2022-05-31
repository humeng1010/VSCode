// console.log(exports)

// console.log(module.exports)

// console.log(exports === module.exports)//true
const username = 'zs'
module.exports.username = username

exports.age = 20

exports.sayHello = function () {
    console.log('hello');
}
