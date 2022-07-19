<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <h1>你好呀</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
</style>