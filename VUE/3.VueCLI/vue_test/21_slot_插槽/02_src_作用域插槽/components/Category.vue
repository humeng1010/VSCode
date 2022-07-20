<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games" msg="其他信息"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["王者荣耀", "英雄联盟", "原神", "穿越火线"],
    };
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
.hot {
  text-align: center;
  color: darksalmon;
}
</style>