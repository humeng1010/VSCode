<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名:{{ name }}</h2>
    <h2>性别:{{ gender }}</h2>
    <h2>年龄:{{ myAge + 1 }}</h2>
    <button @click="updateAge">回到0+1岁</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      msg: "我是尚硅谷的学生",
      // props上的数据优先被放到vc上 这个地方才能用this读取prop
      myName: this.name,
      myGender: this.gender,
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      // this.age = 10; //Vue不希望我们修改pops中的数据
      // 我们把pops给data 通过data来进行修改
      this.myAge = 0;
    },
  },
  // 简单声明接收
  // props: ["name", "gender", "age"],

  // 接收的同时对数据类型进行限制
  /*props: {
    name: String,
    age: Number,
    gender: String,
  },*/
  // 接收的同时对类型限制+必要性的限制+默认值的指定
  props: {
    name: {
      type: String, //配置类型
      required: true, //配置这个属性是否是必须的
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99, //这个属性默认值
    },
  },
};
</script>