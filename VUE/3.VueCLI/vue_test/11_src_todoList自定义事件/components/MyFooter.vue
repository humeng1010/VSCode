<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}</span
    >
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFotter",
  data() {
    return {
      allChecked: false,
    };
  },
  props: ["todos"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      // forEach方法
      //   let num = 0;
      //   this.todos.forEach((todo) => {
      //     if (todo.done) num++;
      //   });
      //   return num;
      // 条件统计
      //   const total = this.todos.reduce((pre, current) => {
      //     return pre + (current.done ? 1 : 0);
      //   }, 0);
      //   return total;
      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    isAll() {
      return this.total === this.doneTotal && this.total > 0;
    },
  },
  methods: {
    checkAll(e) {
      // this.checkAllTodo(e.target.checked);
      this.$emit("checkAllTodo", e.target.checked);
    },
    clearAll() {
      if (!this.doneTotal) return alert("你还没有完成的事项");
      if (confirm("确认清除已完成?"))
        // this.clearAllTodo();
        this.$emit("clearAllTodo");
    },
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>