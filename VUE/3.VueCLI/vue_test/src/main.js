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
