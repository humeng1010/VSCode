<template>
  <h4>{{ person }}</h4>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salay }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salay++">增长薪资</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  //setup的创建时机比beforeCreate早  而且可以接收到的两个参数 props context
  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salay: 20,
        },
      },
    });

    // 返回一个对象(常用)
    return {
      person,
      // toRef 作用创建一个ref对象 其value值指向另一个对象中的某个属性 要将响应式对象中的某个属性单独提供给外部使用时
      /* name: toRef(person, "name"),
      age: toRef(person, "age"),
      salay: toRef(person.job.j1, "salay"), */
      // toRefs
      // 解构赋值 把这个toRefs(person)生成的对象的key和value提取出来
      ...toRefs(person),
    };
  },
};
</script>

