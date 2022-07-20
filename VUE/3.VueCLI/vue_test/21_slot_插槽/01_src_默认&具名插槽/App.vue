<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="./assets/images/food.jpeg" alt="" />
      <template v-slot:footer>
        <div class="foot">
          <a href="#">特色推荐</a>
          <a href="#">更多美食</a>
        </div>
      </template>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(list, index) in games" :key="index">{{ list }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <img slot="center" src="./assets/images/food.jpeg" alt="" />
      <template v-slot:footer>
        <div class="foot">
          <a href="#">经典电影</a>
          <a href="#">更多电影</a>
          <a href="#">更多电影</a>
        </div>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["王者荣耀", "英雄联盟", "原神", "穿越火线"],
      films: [
        "《肖申克的救赎》",
        "《绿皮书》",
        "《楚门的世界》",
        "《怦然心动》",
      ],
    };
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
</style>