// https://web.qianguyihao.com/04-JavaScript%E5%9F%BA%E7%A1%80/05-%E5%8F%98%E9%87%8F%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%EF%BC%9A%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%BC%95%E7%94%A8%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html#js-%E4%B8%AD%E4%B8%80%E5%85%B1%E6%9C%89%E5%85%AB%E7%A7%8D%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
// JS 中一共有八种数据类型
// 基本数据类型(值类型): String字符串 Number数字 BigInt大型数值 Boolean布尔类型 undefined未定义 Null空值 Symbol
// 引用数据类型(引用类型): Object对象
// 注意：内置对象 Function、Array、Date、RegExp、Error 等都是属于 Object 类型。也就是说，除了那七种基本数据类型之外，其他的，都称之为 Object 类型。

// 一个经典的例子
// 基本数据类型举例：

/* var a = 23;
var b = a;
a++;
console.log(a);// 24
console.log(b);// 23 */

// 上面的代码中：a 和 b 都是基本数据类型，让 b 等于 a，然后改变 a 的值之后，发现 b 的值并没有被改变。

// 但是在引用数据类型中，就不同了，我们来看一看。

// 引用数据类型举例：

var obj1 = {}
obj1.name = 'xiaohu'

var obj2 = obj1

obj1.name = 'redyouzi'

console.log(obj1.name);
console.log(obj2.name);

// 上面的代码中：obj1 和 obj2 都是引用数据类型，让 obj2 等于 obj1，然后修改 obj1.name 的值之后，发现 obj2.name 的值也发生了改变。

// # 栈内存和堆内存
/**
 * 我们首先记住一句话：JS 中，所有的变量都是保存在栈内存中的。
 * 然后来看看下面的区别。
 * 基本数据类型：
 * 基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。
 * 引用数据类型：
 * 对象是保存到堆内存中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间；而变量保存了对象的内存地址（对象的引用），保存在栈内存当中。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。
 */