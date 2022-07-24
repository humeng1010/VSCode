<template>
  <h1>vue3的信息</h1>
  <h2>姓名:{{ p.name }}</h2>
  <h2>年龄:{{ p.age }}</h2>
  <h4>{{ p.job.type }}-{{ p.job.salary }}</h4>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let p = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });
    function changeInfo() {
      p.name = "李四";
      p.age = 33;
      p.job.type = "UI";
      p.job.salary = "60K";
      // vue3可以直接通过下标修改数组实现响应式 vue2只能通过push pop 等改变原数组的方法进行响应式的修改
      p.hobby[0] = "学习";
    }
    // 返回一个对象(常用) 对象中的属性和方法在模板中可以直接使用
    return {
      p,
      changeInfo,
    };
  },
};
</script>

