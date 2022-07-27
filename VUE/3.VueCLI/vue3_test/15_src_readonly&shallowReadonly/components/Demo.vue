<template>
  <h3>当前sum的值为:{{ sum }}</h3>
  <button @click="sum++">点击我x++</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salay }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salay++">增长薪资</button>
</template>

<script>
import { reactive, readonly, ref, shallowReadonly, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salay: 20,
        },
      },
    });

    // 设置person为只读而且为深层次的
    // person = readonly(person);
    // shallowReadonly 浅层次的只读
    // person = shallowReadonly(person);
    // sum = readonly(sum);
    // sum = shallowReadonly(sum);

    return {
      sum,
      ...toRefs(person),
    };
  },
};
</script>

