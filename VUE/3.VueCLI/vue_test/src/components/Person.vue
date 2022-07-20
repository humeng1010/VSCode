<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为{{ sum }}</h3>
    <h3>列表中第一个人的名字是{{ firstPersonName }}</h3>
    <input
      type="text"
      placeholder="请输入名字"
      v-model="name"
      @keyup.enter="add"
    />
    <button @click="add">添加</button>
    <button @click="addPersonWang">添加姓王的</button>
    <button @click="addPersonService">从服务器中添加一个人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Person",
  computed: {
    ...mapState("personAbout", ["personList"]),
    // ...mapState("countAbout", ["sum"]),
    // ...mapGetters("personAbout", ["firstPersonName"]),
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    // ...mapActions("personAbout", ["addPersonWang"]),
    add() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      };
      //"personAbout/ADD_PERSON" /前面命名空间
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      this.name = "";
    },
    addPersonWang() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      };
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      this.name = "";
    },
    addPersonService() {
      this.$store.dispatch("personAbout/addPersonService");
    },
  },
};
</script>

<style>
</style>