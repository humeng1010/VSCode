// 引入vue
import Vue from 'vue';
// 引入app
import App from './App';
// 关闭vue的生产提示
Vue.config.productionTip = false;

/*初始写法
    const Demo = Vue.extend({});
    const demo = new Demo();
    Vue.prototype.x = demo;
*/

// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),
    // 调用beforeCreate钩子函数
    beforeCreate() {
        // 向Vue的原型上添加$bus(总线 要求可以有$on,$emit,$off,...方法)  所以我们让这个等于 
        Vue.prototype.$bus = this;//安装全局事件总线
        console.log(this);
    }
})