<template>
  <input type="text" v-model="keyword" />
  <h3>{{ keyword }}</h3>
</template>

<script>
import { customRef } from "vue";
export default {
  name: "App",
  setup() {
    // 自定义一个ref
    function myRef(value, delay) {
      let timer;
      // console.log("---myRef---", value);
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人获取了${value}`);
            // 通知vue追踪value的变化
            track();
            return value;
          },
          set(newValue) {
            console.log(`有人修改了${newValue}`);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              // 触发 通知vue重新解析模板
              trigger();
            }, delay);
          },
        };
      });
    }
    // let keyword = ref("hello"); //使用vue提供的ref
    let keyword = myRef("hello", 500); //使用程序员自定义的ref

    return {
      keyword,
    };
  },
};
</script>

