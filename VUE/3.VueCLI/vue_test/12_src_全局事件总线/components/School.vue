<template>
  <div class="school">
    <h2 class="title">学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <h3 v-show="studentName">欢迎新同学:{{ studentName }}</h3>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
      studentName: "",
    };
  },
  mounted() {
    // console.log("School", this);
    this.$bus.$on("hello", (data) => {
      console.log("我是School的组件,收到了数据", data);
      this.studentName = data;
    });
  },
  // 当这个组件销毁的时候，要去手动释放 $bus 总线上的自定义事件 否则这个自定义事件一直存在总线上而且还没有人使用他获取数据
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>