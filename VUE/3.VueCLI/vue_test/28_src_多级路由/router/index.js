// 该文件用于创建整个应用的路由
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
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
            children: [
                {
                    // 二级路由的path要么写全，要么只写news 不用加/ 因为默认是/news
                    path: "news",
                    component: News,
                },
                {
                    path: "/home/message",
                    component: Message,
                }
            ]
        }
    ]
})