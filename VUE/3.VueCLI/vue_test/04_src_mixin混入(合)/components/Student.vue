<template>
  <div>
    <h2 @click="showName">学生姓名:{{ name }}</h2>
    <h2>性别:{{ gender }}</h2>
  </div>
</template>

<script>
import { mixin } from "../mixin";
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      // props上的数据优先被放到vc上 这个地方才能用this读取prop
      gender: "男",
    };
  },
  mixins: [mixin],
};
</script>