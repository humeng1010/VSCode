<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
    <h3>当前的和放大十倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3 style="color: red">Person组件的总人数是{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="ADD(n)">+</button>
    <button @click="SUB(n)">-</button>
    <button @click="addOdd(n)">当前求和为奇数的时候再加</button>
    <button @click="addWait(n)">等一秒再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    // 下面是借助mapState生成计算属性自动创建的 注意需要从vuex中引入mapState
    // ES6语法
    // ...mapState({ he: "sum", xuexiao: "school", xueke: "subject" }),
    // 简写方式 计算属性名 和 仓库中的状态值的名称一样
    ...mapState(["sum", "school", "subject", "personList"]),

    // 下面是借助mapGetter生成计算属性 自动创建的 注意需要从vuex中引入mapGetters
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // ...mapMutations({ increment: "ADD", decrement: "SUB" }),
    // 简写
    ...mapMutations(["ADD", "SUB"]),

    // ...mapActions({ incrementOdd: "addOdd", incrementWait: "addWait" }),
    ...mapActions(["addOdd", "addWait"]),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>