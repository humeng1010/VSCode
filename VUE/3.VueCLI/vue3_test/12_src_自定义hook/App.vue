<template>
  <button @click="changeShow">切换/隐藏</button>
  <Demo v-if="isShow"></Demo>
  <Test></Test>
</template>

<script>
import { ref } from "vue";
import Demo from "./components/Demo.vue";
import Test from "./components/Test.vue";
export default {
  name: "App",
  components: {
    Demo,
    Test,
  },
  setup() {
    let isShow = ref(true);

    function changeShow() {
      isShow.value = !isShow.value;
    }

    return {
      isShow,
      changeShow,
    };
  },
};
</script>

