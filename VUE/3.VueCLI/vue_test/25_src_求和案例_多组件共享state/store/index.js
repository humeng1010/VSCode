import Vue from 'vue';
// 该文件用于创建Vuex中最为核心的store
// 引入Vuex
import Vuex from 'vuex';
// 创建store对象必须在Vue使用Vuex插件之后
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
const actions = {
    // add(context, value) {
    //     // context上下文对象 当前这个环节的上下文可用的方法
    //     // value dispatch传的值
    //     // console.log("actions中的add被调用", context, value);
    //     context.commit("ADD", value)
    // },
    // sub(context, value) {
    //     context.commit("SUB", value)
    // },
    addOdd(context, value) {
        if (context.state.sum % 2) context.commit("ADD", value)

    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit("ADD", value)
        }, 1000);
    }

}
// 准备mutations--用于操作数据(state)
const mutations = {
    ADD(state, value) {
        // console.log(state, value);
        state.sum += value;
        // 执行render步骤 重新渲染页面
    },
    SUB(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, personObj) {
        console.log("mutations中的ADD_PERSON被调用");
        state.personList.unshift(personObj);
    }

}
// 准备state--用于存储数据
const state = {
    sum: 0, //当前的和
    school: "尚硅谷",
    subject: "前端",
    personList: [
        { id: "001", name: "张三" },
    ]
}
// 准备getters--用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
// 创建并暴露store
export default new Vuex.Store({
    // 填入配置对象
    actions,
    mutations,
    state,
    getters,
});
