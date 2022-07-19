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

})