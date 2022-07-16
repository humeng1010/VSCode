<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>性别:{{ gender }}</h2>
    <input type="text" v-fbind:value="name" />
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      // props上的数据优先被放到vc上 这个地方才能用this读取prop
      gender: "男",
    };
  },
};
</script>