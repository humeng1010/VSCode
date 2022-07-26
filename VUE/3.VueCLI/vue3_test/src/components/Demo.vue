<template>
  <h4>{{ person }}</h4>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salay }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salay++">增长薪资</button>
  <hr />
  <h4>{{ p }}</h4>
  <h2>姓名:{{ myname }}</h2>
  <h2>年龄:{{ myage }}</h2>
</template>

<script>
import { reactive, ref, toRef, toRefs } from "vue";
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
    console.log(person);

    /* let p = {
      name: "李四",
      age: 22,
    }; */

    let p = ref({
      myname: "张三三",
      myage: 33,
    });
    console.log(p);

    // 返回一个对象(常用)
    return {
      person,
      p,
      // toRef 作用创建一个ref对象 其value值指向另一个对象中的某个属性 要将响应式对象中的某个属性单独提供给外部使用时
      /* name: toRef(person, "name"),
      age: toRef(person, "age"),
      salay: toRef(person.job.j1, "salay"), */
      // toRefs
      // 解构赋值 把这个toRefs(person)生成的对象的key和value提取出来
      ...toRefs(person),
      ...toRefs(p.value),
      // 总结
      // toRefs只能接收一个响应式的对象 更准确一些应该是RefImpl对象中的Proxy对象(ref->RefImpl.value:Proxy) 或者直接是Proxy对象(reactive->Proxy)
    };
  },
};
</script>

