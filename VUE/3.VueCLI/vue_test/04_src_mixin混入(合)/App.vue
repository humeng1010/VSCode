<template>
  <div>
    <!-- age前面加一个 : 解决字符串拼接的问题 因为 v-bind:age="20+1" 冒号内的内容被当成js表达式进行执行  -->
    <Student></Student>
    <hr />
    <School></School>
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
};
</script>
