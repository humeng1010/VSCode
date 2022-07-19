<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
        @keyup.enter="searchUsers"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    async searchUsers(e) {
      if (!e.target.value.trim()) {
        return alert("请输入正确内容");
      }
      // 点击搜索 触发初次页面更新
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      try {
        const res = await axios({
          type: "GET",
          // ES6模板字符串进行参数拼接
          url: `https://api.github.com/search/users?q=${this.keyWord}`,
        });
        // 请求成功后
        this.$bus.$emit("updateListData", {
          isLoading: false,
          errMsg: "",
          users: res.data.items,
        });
      } catch (error) {
        // 请求失败后
        this.$bus.$emit("updateListData", {
          isLoading: false,
          errMsg: error.message,
          users: [],
        });
      }
    },
  },
};
</script>

<style>
</style>