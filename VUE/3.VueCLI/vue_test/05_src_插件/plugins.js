// 插件
export default {
    // install中有个参数 为Vue的缔造者 而且还可以接收Vue.use(),后面传入的参数
    install(Vue) {

        // 全局过滤器
        Vue.filter("mySlice", function (value) {
            return value.slice(0, 4);
        });

        // 定义全局指令
        Vue.directive("fbind", {
            // 指令与元素成功绑定时(一上来)
            bind(element, binding) {
                element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted(element) {
                // 自动获取焦点
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value;
            }
        });

        // 定义混入 全局
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200,
                }
            }
        });

        // 给Vue原型上添加一个方法(vm和vc就都能用了)
        Vue.prototype.hello = () => { alert("你好呀") };
    }
}

