//#region 
// 单独指定参数、返回值类型
/* function add(num1: number, num2: number): number {
    return num1 + num2
}

const addNumber = (num1: number, num2: number): number => {
    return num1 + num2
}

const res = add(1, 2)
console.log(res);

const res2 = addNumber(2, 3)
console.log(res2); */
//#endregion

//#region 
// 同时指定参数、返回值类型 只适用于函数表达式
/* const add: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2;
} */
//#endregion

// void 类型
function sayHello(name: string): void {
    console.log(`${name} say hello to you`);
}
sayHello('red')
