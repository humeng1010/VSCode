// 联合类型
let arr: (number | string)[] = ["1", 2, "3", 4, "a", "b"]

// 如果取掉小括号 就代表 要么是 | 前的number类型 ，要么是 | 后的string[]类型
let a: number | string[] = 1
let b: number | string[] = ["a", "b", "c"]
