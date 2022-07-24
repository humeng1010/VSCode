<template>
  <h1>vue3的信息</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h3>工作信息:<br />{{ job }}</h3>
  <h4>{{ job.type }}-{{ job.salary }}</h4>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let name = ref("vue3");
    let age = ref(3);
    const job = ref({
      type: "前端工程师",
      salary: "30k",
    });
    function changeInfo() {
      // name = "李四";
      // age = 4;
      name.value = "李四";
      age.value = 33;
      job.value.type = "UI";
      job.value.salary = "60K";
      console.log(name, age, job);
    }
    // 返回一个对象(常用) 对象中的属性和方法在模板中可以直接使用
    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>

