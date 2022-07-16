<template>
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showName">点击我显示学校名称</button>
  </div>
</template>

<script>
// 组件交互相关的代码(数据、方法...)

// const school = Vue.extend({});
// 组件需要暴露 export 又因为组件可以简写省略掉Vue.extend(); 直接写里面的配置项

export default {
  name: "MySchool", // 和文件名保持一致
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>


<style>
/*  */
.demo {
  background-color: orange;
}
</style>


