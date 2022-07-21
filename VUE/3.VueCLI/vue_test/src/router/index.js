// 该文件用于创建整个应用的路由
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
// 创建并暴露一个路由器
export default new VueRouter({
    // 当前路由路径
    routes: [
        {
            path: "/about",
            component: About,
        },
        {
            path: "/home",
            component: Home,
        }
    ]
})