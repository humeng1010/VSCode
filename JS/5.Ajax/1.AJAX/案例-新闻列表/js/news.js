$(function () {
    function padZero(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return n;
        }
    }
    template.defaults.imports.dateFormat = function (date) {
        var date = new Date(date)
        var year = date.getFullYear();
        var month = padZero(date.getMonth() + 1);
        var day = padZero(date.getDate());
        var time = padZero(date.getHours());
        var times = padZero(date.getMinutes());
        var s = padZero(date.getSeconds());
        // return year + '-' + month + '-' + day + ' ' + time + ':' + times + ':' + s;
        return `${year}-${month}-${day} ${time}:${times}:${s}`


    }
    //获取新闻列表函数
    function getnewslist() {
        $.get('http://www.liulongbin.top:3006/api/news', function (res) {
            if (res.status !== 200) return alert('获取新闻列表失败')
            // console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                res.data[i].tags = res.data[i].tags.split(',')
            }
            console.log(res);
            var htmlStr = template('tpl-news', res)

            $('#news-list').html(htmlStr)
        })
    }
    getnewslist()

})