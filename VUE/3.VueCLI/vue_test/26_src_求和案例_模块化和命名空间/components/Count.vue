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
  mounted() {
    // console.log(this.$store);
  },
  computed: {
    ...mapState("countAbout", ["sum", "school", "subject"]),

    ...mapState("personAbout", ["personList"]),

    ...mapGetters("countAbout", ["bigSum"]),
  },
  methods: {
    ...mapMutations("countAbout", ["ADD", "SUB"]),

    ...mapActions("countAbout", ["addOdd", "addWait"]),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>