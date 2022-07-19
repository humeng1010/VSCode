<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter :todos="todos"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  mounted() {
    // 向 $bus 总线上绑定 自定义事件 全局都可以使用 $emit 触发事件 传递参数
    // this.$bus.$on("addTodo", this.addTodo);

    // this.$bus.$on("updateDone", this.updateDone);
    // this.$bus.$on("deleteTodo", this.deleteTodo);

    // this.$bus.$on("checkAllTodo", this.checkAllTodo);
    // this.$bus.$on("clearAllTodo", this.clearAllTodo);

    // 消息订阅
    this.addTodoId = pubsub.subscribe("addTodo", this.addTodo);
    this.updateDoneId = pubsub.subscribe("updateDone", this.updateDone);
    pubsub.subscribe("deleteTodo", this.deleteTodo);
    pubsub.subscribe("checkAllTodo", this.checkAllTodo);
    pubsub.subscribe("clearAllTodo", this.clearAllTodo);

    this.$bus.$on("updateTodo", (id, title) => {
      // console.log(id, title);
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.title = title;
          return;
        }
      });
    });
  },
  beforeDestroy() {
    // this.$bus.$off("addTodo");
    // this.$bus.$off("updateDone");
    // this.$bus.$off("deleteTodo");
    // this.$bus.$off("checkAllTodo");
    // this.$bus.$off("clearAllTodo");

    // 消息取消订阅
    pubsub.unsubscribe(this.addTodoId);
    pubsub.unsubscribe(this.updateDoneId);

    this.$bus.$off("updateTodo");
  },
  data() {
    return {
      // 或[] 解决null值没有length的报错
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加
    addTodo(msg, todo) {
      this.todos.unshift(todo);
      // 通过事件总线把todos给List
      // this.$bus.$emit("todos", this.todos);
    },
    // 勾选
    updateDone(msg, id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除
    deleteTodo(msg, id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 全选或反选
    checkAllTodo(msg, done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 清除完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  //   本地存储 监视todos属性的变化 给浏览器本地存储数据
  watch: {
    todos: {
      deep: true, //开启深度监视
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  /* display: inline-block; */
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(119, 182, 207);
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>