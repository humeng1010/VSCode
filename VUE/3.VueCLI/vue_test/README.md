# Vue

## 关于不同版本的Vue

1. vue.js与vue.runtime.xxx.js的区别：

    - vue.js是完整版的vue，包含：核心功能+模板解析器
    - vue.runtime.xxx.js是运行版的vue，只包含 核心功能，没有模板解析器

2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。

```javascript
/*
  该文件是整个项目的入口文件
*/
// 引入Vue 这个是不完整版的Vue 没有template模板解析
import Vue from 'vue'
// 引入App组件 它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue的实例对象---vm
new Vue({
  el: "#app",
  // 完成了:将app组件放入容器中 这样写是因为我们引入的是不完整版的Vue 没有template模板解析
  // 完整写法
  // render(h) {
  //   return h("h1", "你好呀")
  //   return h(App)
  // }
  // es6箭头函数简化写法
  render: h => h(App)
})
```
