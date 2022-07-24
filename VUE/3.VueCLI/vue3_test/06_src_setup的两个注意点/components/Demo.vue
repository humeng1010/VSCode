<template>
  <h1>vue3的信息</h1>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>

  <button @click="test">测试触发Demo组件的hello事件</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["msg", "school"],
  // 可视化 可以知道这个组件被绑定了上什么自定义事件
  emits: ["hello"],
  //setup的创建时机比beforeCreate早  而且可以接收到的两个参数 props context
  setup(props, context) {
    // console.log(props);
    // console.log(context.attrs); // 给props捡漏
    // console.log(context.emit); // 触发自定义事件
    // console.log(context.slots); //插槽
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
    });
    function test() {
      context.emit("hello", 666);
    }
    // 返回一个对象(常用) 对象中的属性和方法在模板中可以直接使用
    return {
      person,
      test,
    };
  },
};
</script>

