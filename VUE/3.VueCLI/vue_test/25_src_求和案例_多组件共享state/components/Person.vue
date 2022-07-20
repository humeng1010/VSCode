<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为{{ sum }}</h3>
    <input
      type="text"
      placeholder="请输入名字"
      v-model="name"
      @keyup.enter="add"
    />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
      <li>xxx</li>
      <li>xxx</li>
      <li>xxx</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "Person",
  computed: {
    ...mapState(["personList", "sum"]),
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      };
      //   console.log(personObj);
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>