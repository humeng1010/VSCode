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
import { reactive, ref, watch } from "vue";
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
    // watch source只能是getter/effect函数、ref、响应对象或这些类型的数组。
    // 情况一:监视ref所定义的一个响应式数据
    /* watch(sum, (newValue, oldValue) => {
      console.log(`sum的值变化了${newValue},${oldValue}`);
    }); */

    // 情况二:监视ref所定义的多个响应式数据
    /* watch(
      [sum, msg],
      (value, oldValue) => {
        console.log(`值变化了`, value, oldValue);
      },
      { immediate: true }
    ); */

    // 情况三:监视reactive所定义的一个响应式数据的全部属性
    // 注意此处无法正确获取oldValue的值***
    // 注意此处强制开启了deep深度监视 关闭无效
    /* watch(
      person,
      (value, oldValue) => {
        console.log("person变化了", value, oldValue);
      },
      { deep: false }
    ); */

    // 情况四:监视reactive所定义的一个响应式数据的某一个属性
    /* watch(
      () => person.age,
      (value, oldValue) => {
        console.log("person的age变化了", value, oldValue);
      }
    ); */

    // 情况五:监视reactive所定义的一个响应式数据的某一写属性
    watch([() => person.name, () => person.age], (value, oldValue) => {
      console.log("person的age或name变化了", value, oldValue);
    });

    // 特殊情况
    // 这里由于监视的是reactive自定义的对象中的某个属性(对象)，所以deep配置有效
    /* watch(
      () => person.job,
      (value, oldValue) => {
        console.log("person的job变化了", value, oldValue);
      },
      { deep: true }
    ); */

    // reactive用oldvalue的话，只用（）=>对象中的任意值 就好了，如果对象中的对象，需要开启deep监视。
    // 返回一个对象(常用)
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

