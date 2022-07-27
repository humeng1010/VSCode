<template>
  <h3>当前x.y的值为:{{ x.y }}</h3>
  <button @click="x.y++">点击我x++</button>
  <hr />
  <h4>{{ person }}</h4>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salay }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salay++">增长薪资</button>
</template>

<script>
import { reactive, ref, toRef, toRefs, shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    // let person = shallowReactive({ // 浅层次的响应式
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salay: 20,
        },
      },
    });

    // let x = shallowRef(0);//shallowRef处理基本数据类型与ref没有什么区别
    // let x = shallowRef({ //shallowRef处理对象数据类型的时候失去了响应式
    let x = shallowRef({
      y: 0,
    });
    // - shallowReactive：只处理对象最外层属性的响应式（浅响应式）。
    // - shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。
    // 但是shallowRef不是完全不触发响应式，当返回对象整体被替换的时候就会触发响应式
    // 返回一个对象(常用)
    return {
      person,
      x,
      ...toRefs(person),
    };
  },
};
</script>

