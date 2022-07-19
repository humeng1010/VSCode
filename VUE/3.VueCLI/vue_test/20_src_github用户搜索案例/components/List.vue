<template>
  <div class="row">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeInLeftBig"
      leave-active-class="animate__fadeOutRightBig"
    >
      <!-- 展示用户列表 -->
      <div
        v-show="users.length"
        class="card"
        v-for="user in users"
        :key="user.id"
      >
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
      <!-- 展示欢迎词 -->
      <h1 v-show="isFirst" key="1">欢迎使用</h1>
      <!-- 展示加载中 -->
      <h1 v-show="isLoading" key="3">加载中</h1>
      <!-- 展示错误信息 -->
      <h1 v-show="errMsg" key="4">请求出错了{{ errMsg }}</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "List",
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: "",
      users: [],
    };
  },
  mounted() {
    this.$bus.$on("updateListData", (dataObj) => {
      if (dataObj.hasOwnProperty("isFirst")) this.isFirst = dataObj.isFirst;
      this.isLoading = dataObj.isLoading;
      this.errMsg = dataObj.errMsg;
      this.users = dataObj.users;
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>