<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>性别:{{ gender }}</h2>
    <button @click="sendToSchool">点击向学校发送姓名</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      gender: "男",
    };
  },
  methods: {
    sendToSchool() {
      // console.log(this);
      this.$bus.$emit("hello", this.name);
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