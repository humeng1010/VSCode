console.log("Hello TS");
let age: number = 20;
console.log(age);


// 快速排序
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
let arr2: number[] = arr.sort((a, b) => a - b);
console.log(arr2);

// 冒泡排序
let arr3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 反转数组
arr3.reverse();
console.log(arr3);
for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3.length - i - 1; j++) {
        if (arr3[j] > arr3[j + 1]) {
            let temp = arr3[j];
            arr3[j] = arr3[j + 1];
            arr3[j + 1] = temp;
        }
    }
}
console.log(arr3);

