<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 使用 -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeInLeftBig"
      leave-active-class="animate__fadeOutRightBig"
    >
      <h1 v-show="isShow" key="1">你好呀</h1>
      <h1 v-show="isShow" key="2">你好呀</h1>
    </transition-group>
  </div>
</template>

<script>
// 引入第三方库
import "animate.css";
export default {
  name: "MyTest",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: pink;
}
</style>