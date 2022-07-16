// 引入vue
import Vue from 'vue';
// 引入app
import App from './App';

// 引入混合 配置全局混合
// import { mixin, mixin2 } from "./mixin";
// 配置全局mixin
// Vue.mixin(mixin);
// Vue.mixin(mixin2);

// 关闭vue的生产提示
Vue.config.productionTip = false;
// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),
})