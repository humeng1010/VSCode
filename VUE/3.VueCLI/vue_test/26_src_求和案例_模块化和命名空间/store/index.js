import Vue from 'vue';
// 该文件用于创建Vuex中最为核心的store
import countAbout from './count'
import personAbout from './person'
// 引入Vuex
import Vuex from 'vuex';
// 创建store对象必须在Vue使用Vuex插件之后
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    // 模块化
    modules: {
        countAbout,
        personAbout,
    }
});
