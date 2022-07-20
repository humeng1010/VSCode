<template>
  <div class="container">
    <Category title="游戏">
      <template slot-scope="games">
        <!-- {{ games.games }} -->
        <!-- {{ games.msg }} -->
        <ul>
          <li v-for="(list, index) in games.games" :key="index">{{ list }}</li>
        </ul>
      </template>
    </Category>

    <Category>
      <template slot-scope="games">
        <ol>
          <li v-for="(game, index) in games.games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </Category>

    <Category>
      <template slot-scope="games">
        <h4 v-for="(game, index) in games.games" :key="index">{{ game }}</h4>
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