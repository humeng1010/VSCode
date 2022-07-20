// 求和相关的配置
export default {
    namespaced: true,//开启命名空间 使通过简写形式可以获取到
    actions: {
        addOdd(context, value) {
            if (context.state.sum % 2) context.commit("ADD", value)

        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit("ADD", value)
            }, 1000);
        }
    },
    mutations: {
        ADD(state, value) {
            // console.log(state, value);
            state.sum += value;
            // 执行render步骤 重新渲染页面
        },
        SUB(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0, //当前的和
        school: "尚硅谷",
        subject: "前端",
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}