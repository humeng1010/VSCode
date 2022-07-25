<template>
  姓:<input type="text" v-model="person.firstName" />
  <br />
  名:<input type="text" v-model="person.lastName" />
  <button @click="testMethod">使用method计算属性</button>
  <h3>method得到的{{ person.name }}</h3>
  <!-- <h3>姓名:{{ person.name }}</h3> -->
  <h3>姓名:{{ person.fullName }}</h3>
  全名: <input type="text" v-model="person.fullName" />
</template>

<script>
import { computed, reactive } from "vue";
export default {
  name: "Demo",
  //setup的创建时机比beforeCreate早  而且可以接收到的两个参数 props context
  setup() {
    // 数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
      name: "",
    });
    // 计算属性
    // 简写只考虑读
    /* person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    }); */
    // 完整写法
    // 考虑读和写
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    // 方法
    function testMethod() {
      person.name = person.firstName + person.lastName;
    }

    // 返回一个对象(常用)
    return {
      person,
      testMethod,
    };
  },
};
</script>

