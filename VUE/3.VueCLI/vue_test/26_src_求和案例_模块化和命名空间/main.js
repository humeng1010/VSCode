import Vue from 'vue';
import App from './App';


// 引入store ./store/index.js 后面的index可以不写 脚手架会自动去找index
import store from "./store"


Vue.config.productionTip = false;

new Vue({
    el: "#app",
    render: h => h(App),
    // 给vm和vc身上绑定$store
    store,
    // 全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})