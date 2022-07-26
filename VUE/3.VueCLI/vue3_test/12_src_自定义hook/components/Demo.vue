<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点击我+1</button>
  <h2>当前鼠标点击的坐标:x {{ point.x }} y {{ point.y }}</h2>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "Demo",
  //setup的创建时机比beforeCreate早  而且可以接收到的两个参数 props context
  setup() {
    // 数据
    let sum = ref(0);
    let point = usePoint();

    // 返回一个对象(常用)
    return {
      sum,
      point,
    };
  },

  // 通过配置项的形式使用生命周期钩子
  //#region
  /* beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  }, */
  //#endregion
};
</script>

