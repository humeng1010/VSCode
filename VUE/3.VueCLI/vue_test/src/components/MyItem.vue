<template>
  <li>
    <label>
      <!-- 这种方法也可以实现修改选择框的状态(done) 但是不推荐使用 因为这个修改了外来的属性 有点违反原则 -->
      <!-- <input type="checkbox" v-model="itodo.done" /> -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handlerCheck(todo.id)"
      />

      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handlerDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handlerCheck(id) {
      this.$bus.$emit("updateDone", id);
    },
    handlerDelete(id) {
      if (confirm("确定删除吗?")) {
        this.$bus.$emit("deleteTodo", id);
      }
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>