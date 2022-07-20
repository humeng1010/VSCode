import axios from 'axios';
// 人员管理相关配置
export default {
    namespaced: true,//开启命名空间 使通过简写形式可以获取到
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf("王") === 0) {
                context.commit("ADD_PERSON", value)
            } else {
                return alert("请输入姓王")
            }
        },
        // 运行service中的node服务
        async addPersonService(context) {
            try {
                const res = await axios.get("http://localhost:8080/api/getPersonName");
                context.commit("ADD_PERSON", res.data)
            } catch (error) {
                console.log("接口错误", error);
                alert(`服务端错误${error.response.status}`)
            }
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            // console.log("mutations中的ADD_PERSON被调用");
            state.personList.unshift(personObj);
        }
    },
    state: {
        personList: [
            { id: "001", name: "张三" },
        ]

    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    },
}