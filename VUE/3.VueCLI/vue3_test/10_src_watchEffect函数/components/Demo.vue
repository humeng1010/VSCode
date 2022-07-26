<template>
  <h2>当前求和为{{ sum }}</h2>
  <button @click="sum++">点击我+1</button>
  <hr />
  <h2>{{ msg }}</h2>
  <button @click="msg += '!'">btn</button>
  <hr />
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salay }}K</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salay++">增长薪资</button>
</template>

<script>
import { reactive, ref, watch, watchEffect } from "vue";
export default {
  name: "Demo",
  //setup的创建时机比beforeCreate早  而且可以接收到的两个参数 props context
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好呀");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salay: 20,
        },
      },
    });
    // console.log(person);
    // 监视
    watch(
      sum,
      (value, oldValue) => {
        console.log("sum的值变化了", value, oldValue);
      },
      { immediate: true }
    );
    // watchEffect所指定的回调中用到的数据只要发生变化，则重新执行该回调
    watchEffect(() => {
      const x = person;
      console.log("watchEffect所指的的回调执行了");
      localStorage.setItem("personInfo", JSON.stringify(x));
    });

    // 返回一个对象(常用)
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

