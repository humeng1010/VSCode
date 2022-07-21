<template>
  <ul>
    <li :style="{ opacity }">欢迎学习VUE</li>
    <li>
      news001
      <input type="text" />
    </li>
    <li>
      news002
      <input type="text" />
    </li>
    <li>
      news003
      <input type="text" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // router中的两个新的生命周期函数
  // activated --> 激活 点击了这个组件的时候执行
  activated() {
    this.timer = setInterval(() => {
      // console.log("News组件已经被激活");
      this.opacity -= 0.01;
      if (this.opacity < 0) {
        this.opacity = 1;
      }
    }, 10);
  },
  // deactivated --> 取消激活 点击了其他组件的时候执行
  deactivated() {
    // console.log("News组件失去激活");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>