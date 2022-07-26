<template>
  <button @click="changeShow">切换/隐藏</button>
  <Demo v-if="isShow"></Demo>
</template>

<script>
import { ref } from "vue";
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
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

