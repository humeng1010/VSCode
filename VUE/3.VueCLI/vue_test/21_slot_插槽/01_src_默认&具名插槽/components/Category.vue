<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--    slot -> 插槽 
        定义一个插槽(挖个坑 等待组件的使用者进行填充) 
        内可以有默认值
    -->
    <slot name="center"><h6 class="hot">暂没有品牌占据热榜HOT</h6></slot>
    <slot name="footer"><h6 class="hot">暂没有连接</h6></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
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