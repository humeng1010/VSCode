<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      // 返回上一个路由
      this.$router.back();
    },
    forward() {
      // 前进到下一个路由
      this.$router.forward();
    },
    test() {
      // 后退两步
      this.$router.go(-2);
    },
  },
};
</script>

<style>
</style>