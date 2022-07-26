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
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salay: 20,
        },
      },
    });
    console.log(person);
    // 监视的是refimpl对象而value是一个普通的属性，不需要.value 如果.value了就相当于直接写了个0进行监视
    watch(sum, (value, oldValue) => {
      console.log("sum的值变化了", value, oldValue);
    });
    // 情况二 这个时候person是refimpl对象 注意这个的value属性时一个proxy对象 浅层次的检测，检测不到person对象内容的变化 只能检测地址
    // 所以有两种解决方案:一、person.value直接监视Proxy对象 二、添加配置项{deep:true}
    watch(
      person,
      (value, oldValue) => {
        console.log("person的值变化了", value, oldValue);
      },
      { deep: true }
    );
    // 返回一个对象(常用)
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

