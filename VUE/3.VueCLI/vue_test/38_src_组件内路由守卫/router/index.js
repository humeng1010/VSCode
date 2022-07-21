// 该文件用于创建整个应用的路由
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detail from '../pages/Detail.vue';
// 创建并暴露一个路由器
const router = new VueRouter({
    // 当前路由路径
    routes: [
        {
            meta: { isAuth: true, title: "关于我们" },
            name: "guanyu",
            path: "/about",
            component: About,
        },
        {
            meta: { title: "首页" },
            name: "zhuye",
            path: "/home",
            component: Home,
            children: [
                {

                    // 路由元信息 $route身上给程序员使用的一个对象 配置一个路由守卫是否放行的标志
                    meta: { isAuth: true, title: "新闻" },
                    name: "xinwen",
                    // 二级路由的path要么写全，要么只写news 不用加/ 因为默认是/news
                    path: "news",
                    component: News,
                    // 独享路由守卫 只有前置 没有后置
                    // beforeEnter(to, from, next) {
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('school') === 'atguigu') {
                    //             next();
                    //         } else {
                    //             alert('学校名称不对');
                    //             next('/home');
                    //         }
                    //     } else {
                    //         next();
                    //     }

                    // },

                },
                {
                    meta: { isAuth: true, title: "消息" },
                    name: "xiaoxi",
                    path: "message",
                    component: Message,
                    children: [
                        {
                            meta: { isAuth: true, title: "详情" },
                            name: "xiangqing",
                            path: "detail",
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// 路由守卫
// 全局前置路由守卫——初始化的时候被调用 和每次路由切换之 {前} 被调用
// router.beforeEach((to, from, next) => {
//     // 判断用户想要去的地方是否需要权限校验
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next();
//         } else {
//             alert('学校名称不对');
//             next('/home');
//         }
//     } else {
//         next();
//     }

// })
// 后置路由守卫——初始化的时候被调用 和每次路由切换之 {后} 被调用
// router.afterEach((to, from) => {
//     // console.log(to, from);
//     document.title = to.meta.title || 'VueRunner';

// })
export default router;