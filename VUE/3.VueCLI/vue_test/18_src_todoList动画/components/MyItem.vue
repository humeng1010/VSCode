<template>
  <transition
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__backInDown"
    leave-active-class="animate__backOutDown"
  >
    <li>
      <label>
        <!-- 这种方法也可以实现修改选择框的状态(done) 但是不推荐使用 因为这个修改了外来的属性 有点违反原则 -->
        <!-- <input type="checkbox" v-model="itodo.done" /> -->
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handlerCheck(todo.id)"
        />

        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <!-- @blur 失去焦点事件 -->
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handlerBlur(todo, $event)"
        />
      </label>
      <button class="btn btn-danger" @click="handlerDelete(todo.id)">
        删除
      </button>
      <button
        v-show="!todo.isEdit"
        class="btn btn-edit"
        @click="handlerEdit(todo)"
        ref="inputTitle"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import "animate.css";
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handlerCheck(id) {
      // this.$bus.$emit("updateDone", id);
      pubsub.publish("updateDone", id);
    },
    handlerDelete(id) {
      if (confirm("确定删除吗?")) {
        // this.$bus.$emit("deleteTodo", id);
        pubsub.publish("deleteTodo", id);
      }
    },
    handlerEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        // 给todo身上 追加 一个新的响应式的属性
        this.$set(todo, "isEdit", true);
      }
      // setTimeout(() => {
      //   this.$refs.inputTitle.focus();
      // });
      this.$nextTick(() => {
        this.$refs.inputTitle.focus();
      });
    },
    handlerBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
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