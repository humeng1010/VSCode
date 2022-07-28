<template>
  <input type="text" v-model="keyword" />
  <h3>{{ keyword }}</h3>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义一个ref
    function myRef(value) {
      console.log("---myRef---", value);
    }
    // let keyword = ref("hello"); //使用vue提供的ref
    let keyword = myRef("hello"); //使用程序员自定义的ref

    return {
      keyword,
    };
  },
};
</script>

