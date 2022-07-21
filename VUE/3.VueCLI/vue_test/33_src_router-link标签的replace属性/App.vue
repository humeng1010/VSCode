<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- replace 替换掉当前的浏览器的历史记录 -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/about"
            >About</router-link
          >
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- <h2>我是About的内容</h2> -->
            <!-- 此处到底展示什么组件得看用户点击的是哪个导航 -->
            <!-- 指定组件呈现的位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style>
</style>