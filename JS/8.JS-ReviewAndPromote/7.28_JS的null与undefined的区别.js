// https://web.qianguyihao.com/04-JavaScript%E5%9F%BA%E7%A1%80/08-%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%EF%BC%9ANull%20%E5%92%8C%20Undefined.html#case1%EF%BC%9A%E5%8F%98%E9%87%8F%E5%B7%B2%E5%A3%B0%E6%98%8E%EF%BC%8C%E6%9C%AA%E8%B5%8B%E5%80%BC%E6%97%B6
// null:空对象
// null 专门用来定义一个空对象。例如：let a = null，又例如 Object.create(null).
// 如果你想定义一个变量用来保存引用类型，但是还没想好放什么内容，这个时候，可以在初始化时将其设置为 null。
// 你可以把 null 理解为：null 虽然是一个单独的数据类型，但null 相当于是一个 object，只不过地址为空（空指针）而已。

/*
let myObj = null;
console.log(typeof myObj);//打印结果为object
 */

// 补充：
// Null 类型的值只有一个，就是 null。比如 let a = null。
// 使用 typeof 检查一个 null 值时，会返回 object。

// undefined:未定义类型

// case1：变量已声明，未赋值时
/*
let name;
console.log(name);
console.log(typeof name);
*/
// 补充：
// Undefined 类型的值只有一个，就是 undefind。比如 let a = undefined。
// 使用 typeof 检查一个 undefined 值时，会返回 undefined。

// case2：变量未声明（未定义）时
// 如果你从未声明一个变量，就去使用它，则会报错（这个大家都知道）；此时，如果用 typeof 检查这个变量时，会返回 undefined。举例：
/*
console.log(typeof a); // undefined
console.log(a); // 打印结果：Uncaught ReferenceError: a is not defined
 */

// case3：函数无返回值时
/* function foo() { }

console.log(foo()); // 打印结果：undefined
 */

// case4：调用函数时，未传参
/* 
function foo(name) {
    console.log(name);
}

foo(); // 调用函数时，未传参。执行函数后的打印结果：undefined
 */

/* 
null 和 undefined 有很大的相似性。看看 null == undefined 的结果为 true 也更加能说明这点。
但是 null === undefined 的结果是 false。它们虽然相似，但还是有区别的，其中一个区别是，和数字运算时：
10 + null 结果为 10。
10 + undefined 结果为 NaN。
规律总结：
任何值和 null 运算，null 可看做 0 运算。
任何数据类型和 undefined 运算都是 NaN。
 */