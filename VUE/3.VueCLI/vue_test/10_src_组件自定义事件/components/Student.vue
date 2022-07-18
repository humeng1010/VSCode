<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>性别:{{ gender }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="add">点我age++</button>
    <button @click="sendStudentName">点击我传给App学生名</button>
    <button @click="offbind">解绑事件</button>
    <button @click="death">销毁当前Student组件的实例对象</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      gender: "男",
      age: 0,
    };
  },
  methods: {
    add() {
      console.log("add回调被调用");
      this.age++;
    },
    sendStudentName() {
      // 触发当前实例上的atguigu事件。附加参数都会传给监听器回调。
      this.$emit("atguigu", this.name, 1, 2, 3, 4);
      // this.$emit("demo");
    },
    offbind() {
      // 解绑vc组件上的atguigu事件
      // this.$off("atguigu");// 解绑一个自定义事件
      // this.$off(["atguigu", "demo"]); // 解绑多个自定义事件
      this.$off(); // 解绑所有自定义事件
    },
    death() {
      this.$destroy(); // 销毁了当前Student组件的实例对象
    },
  },
};
</script>

<style scoped>
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 5px;
}
</style>