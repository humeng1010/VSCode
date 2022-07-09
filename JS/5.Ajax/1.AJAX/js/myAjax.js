function resolveData(data) {
    var arr = [];
    for (var k in data) {
        var str = k + "=" + data[k];
        arr.push(str);
    }
    return arr.join("&");
}

//test
// console.log(resolveData({ name: "zs", age: 20 }));

function myAjax(options) {
    var xhr = new XMLHttpRequest();
    //把外界传进来的参数对象，转换为 查询字符串
    var query = resolveData(options.data);
    // 判断请求类型并且发送请求
    if (options.type.toUpperCase() === "GET") {
        //发起GET请求
        xhr.open(options.type, options.url + "?" + query);
        xhr.send();

    } else if (options.type.toUpperCase() === "POST") {
        //发起POST请求
        xhr.open(options.type, options.url);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(query)
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            options.success(response);
        }
    }
}