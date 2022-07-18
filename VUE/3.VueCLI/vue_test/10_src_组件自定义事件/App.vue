<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <h2>{{ school.name }}</h2>
    <h3>{{ student.name }}</h3>
    <!-- 通过父组件给子组件 传递函数类型的props 实现:子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <!-- 通过父组件给子组件 绑定自定义事件 实现:子给父传递数据 -->
    <!-- <Student v-on:atguigu="getStudentName"></Student> -->
    <!-- 触发一次 -->
    <!-- <Student @atguigu.once="getStudentName"></Student> -->

    <Student ref="student" @click.native="show"></Student>
  </div>
</template>

<script>
// 引入School组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好呀!",
      school: {
        name: "",
      },
      student: {
        name: "",
      },
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("收到了School的name", name);
      this.school.name = name;
    },
    // 接收多个参数
    getStudentName(name, ...params) {
      console.log(
        "自定义事件atguigu回调函数被调用,收到了Student的name",
        name,
        params
      );
      this.student.name = name;
    },
    // demo() {
    //   console.log("自定义事件demo回调函数被调用");
    // },
    show() {
      alert(123);
    },
  },
  mounted() {
    // vm.$on
    // 监听当前实例上的自定义事件。事件可以由 vm.$emit 触发。回调函数会接收所有传入事件触发函数的额外参数。

    // 通过这种ref获取到student的vc实例对象 并且向实例对象身上绑定一个 自定义事件 "atguigu" 并指定一个回调函数接收点击事件传的参数
    // 这种方法更灵活 例如 App挂载完毕后等待3000毫秒再给student组件身上绑定atguigu事件
    // 在Student组件中通过给对应的元素绑定 点击事件 在函数中使用 this.$emit("atguigu",[args...]) 触发自定义事件并附带参数
    // setTimeout(() => {
    // vc.$on( event, callback )
    // this.$refs.student.$on("atguigu", this.getStudentName);
    // this.$refs.student.$once("atguigu", this.getStudentName);// 触发一次
    // }, 3000);
    // 注意回调函数的this指向
    this.$refs.student.$on("atguigu", this.getStudentName);
    // this.$refs.student.$on("demo", this.demo);
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
