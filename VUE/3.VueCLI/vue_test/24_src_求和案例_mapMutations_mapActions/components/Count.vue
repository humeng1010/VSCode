<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
    <h3>当前的和放大十倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
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
    /**-----------------------mapState---------------------------------- */
    // 自己通过计算属性实现状态映射
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subkect() {
    //   return this.$store.state.subject;
    // },
    // 上面是程序员自己通过state映射写的计算属性
    // 下面是借助mapState生成计算属性自动创建的 注意需要从vuex中引入mapState
    // ES6语法
    // ...mapState({ he: "sum", xuexiao: "school", xueke: "subject" }),
    // 简写方式 计算属性名 和 仓库中的状态值的名称一样
    ...mapState(["sum", "school", "subject"]),
    /**-----------------------mapGetters---------------------------------- */
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    // 下面是借助mapGetter生成计算属性 自动创建的 注意需要从vuex中引入mapGetters
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // increment() {
    //   this.$store.commit("ADD", this.n);
    // },
    // decrement() {
    //   this.$store.commit("SUB", this.n);
    // },
    // 上面我们自己写
    // ...mapMutations({ increment: "ADD", decrement: "SUB" }),
    // 简写
    ...mapMutations(["ADD", "SUB"]),
    // 下面通过mapMutations自动生成的 然后进入到commit环节修改数据然后render 注意value的值需要通过事件传参的方式传入
    // increment(value) {
    //   this.$store.commit("ADD", value);
    // },
    // decrement(value) {
    //   this.$store.commit("SUB", value);
    // },

    /**---------------------------------------------------------------------- */
    // incrementOdd() {
    //   // if (this.$store.state.sum % 2) this.$store.dispatch("add", this.n);
    //   this.$store.dispatch("addOdd", this.n);
    // },
    // incrementWait() {
    //   // setTimeout(() => {
    //   //   // 可以直接到commit提交步骤 跳过dispatch 发送阶段
    //   //   // this.$store.commit("ADD", this.n);
    //   // }, 1000);
    //   this.$store.dispatch("addWait", this.n);
    // },
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