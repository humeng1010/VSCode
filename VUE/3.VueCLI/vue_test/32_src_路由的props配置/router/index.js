// 该文件用于创建整个应用的路由
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import Detail from '../pages/Detail.vue';
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
                    path: "message",
                    component: Message,
                    children: [
                        {
                            // name: "xiangqing",
                            // path: "detail/:id/:title",
                            path: "detail",
                            component: Detail,
                            // props的第一种写法，值为对象，该对象中所有的key和value都会以props传递给Detail组件
                            // props: {
                            //     // 固定参数
                            //     a: "a",
                            //     b: "b",
                            // }

                            // props的第二种写法(接收不了query)，值为布尔值，如果为true，则会将该路由收到的params参数，以props的形式传给Detail组件
                            // props: true,

                            // props的第三种写法，值为函数，该函数的返回值会以props的形式传给Detail组件
                            // 目的让路由接收参数的时候直接使用props接收，不需要使用$router.query[params].xxx这么繁琐的方式
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