import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    render: h => h(App),
    // 全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})