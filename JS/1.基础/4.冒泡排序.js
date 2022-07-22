/**
 * JS 冒泡排序
 */
// var arr = [5,4,3,2,1];
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length - 1; i++) {//外层循环
    for (var j = 0; j < arr.length - i - 1; j++) {//内层循环
        //内部比较两个数,前一个数和后一个数比较
        //升序排列:
        //如果前面一个数大于后面一个数就交换两个数的顺序
        //降序排列:
        //如果前面一个数小于后面一个数就交换两个数的顺序
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
// alert(arr);
// alert(Array.isArray(arr))
// console.log(arr);


var sort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;

}
let res = sort([3, 4, 1, 2, 8, 7, 9, 5]);
console.log(res);