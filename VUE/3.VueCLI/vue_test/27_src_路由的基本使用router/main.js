import Vue from 'vue';
import App from './App';

// 引入VueRouter
import VueRouter from 'vue-router';
// 引入路由器
import router from './router';
// 应用插件
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    render: h => h(App),
    // 挂载路由器
    router,
})