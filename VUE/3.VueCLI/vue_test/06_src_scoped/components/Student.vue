<template>
  <div class="demo">
    <h2>学生姓名:{{ name }}</h2>
    <h2>性别:{{ gender }}</h2>
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
};
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>