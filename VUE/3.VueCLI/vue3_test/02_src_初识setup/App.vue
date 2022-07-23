<template>
  <h1>vue3的信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>性别:{{ sex }}</h2>
  <button @click="sayHello">say(vue3)</button>
  <button @click="sayWelcome">say(vue2)</button>
</template>

<script>
// import { h } from "vue";
export default {
  name: "App",
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    sayWelcome() {
      alert("欢迎");
    },
  },
  // 此处只是测试setup函数，暂时不考虑响应式的问题
  setup() {
    // 数据
    let name = "vue3";
    let age = 3;
    // 方法
    function sayHello() {
      alert(`我叫${name},我${age}岁了,你好呀!`);
    }
    // 返回一个对象(常用) 对象中的属性和方法在模板中可以直接使用
    return {
      name,
      age,
      sayHello,
    };

    // 返回一个函数(渲染函数)
    // return () => h("h1", name);
  },
};
</script>

