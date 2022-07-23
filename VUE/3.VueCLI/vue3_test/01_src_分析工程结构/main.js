// 引入的不在是Vue的构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
// 创建应用实例对象 - app(类似于vue2的vm 但是app比vm更轻量)
const app = createApp(App)
console.log("@@@", app);
// 挂载应用实例对象到选择器id为app的元素上
app.mount('#app')

// setTimeout(() => {
//     // 卸载
//     app.unmount('#app')
// }, 1000)
