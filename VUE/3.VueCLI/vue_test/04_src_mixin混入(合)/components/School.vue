<template>
  <div>
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
import { mixin, mixin2 } from "../mixin";
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      // props上的数据优先被放到vc上 这个地方才能用this读取prop
      address: "北京",
    };
  },
  mounted() {
    // 混合里有钩子函数 并且 组件中也有钩子函数 会一起使用 (先使用混合中的，再使用自身的，与书写顺序无关)
    console.log("你好呀！！！");
  },
  mixins: [mixin, mixin2],
};
</script>