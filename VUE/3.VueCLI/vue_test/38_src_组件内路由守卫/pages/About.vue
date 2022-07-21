<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  // beforeDestroy() {
  //   console.log("About组件即将被销毁");
  // },
  // mounted() {
  //   console.log("About组件已经被挂载");
  // },
  // 通过路由规则，进入到该组件时被调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("请先登录");
      }
    } else {
      next();
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    // ...
    console.log("About组件即将离开", to, from);
    next();
  },
};
</script>

<style>
</style>