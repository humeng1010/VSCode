<template>
  <div>
    <h2>学校名称:{{ name | mySlice }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="test">你好呀</button>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷aaabbb",
      // props上的数据优先被放到vc上 这个地方才能用this读取prop
      address: "北京",
    };
  },
  methods: {
    test() {
      // 插件中给Vue原型上添加的方法
      this.hello();
    },
  },
};
</script>