//在一个自定义模块中 默认情况下 module.exports = {}
const age = 20
//向module.exports 对象上挂载一个 username 属性
module.exports.username = 'zs'
//向module.exports 对象上挂载一个 sayHello 方法
module.exports.sayHello = function () {
    console.log('Hello!')
}
module.exports.age = age

module.exports.a = a
function a() {
    console.log('a')

}

//让module.exports指向一个新对象
module.exports = {
    username: '小黑',
    sayHi() {
        console.log('Hi');

    }
}
//module.exports就指向新的对象了