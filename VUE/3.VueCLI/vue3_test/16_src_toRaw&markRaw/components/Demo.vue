<template>
  <h3>当前sum的值为:{{ sum }}</h3>
  <button @click="sum++">点击我x++</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salay }}K</h2>
  <h3 v-if="person.car">车:{{ person.car }}</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salay++">增长薪资</button>
  <button @click="showRawPerson">显示person的普通对象</button>
  <button @click="addCar">添加一台车</button>
  <button v-if="person.car" @click="person.car.name += '!'">修改车名</button>
  <button v-if="person.car" @click="modifyCarPrice">修改车的价格</button>
</template>

<script>
import { computed, markRaw, reactive, ref, toRaw, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salay: 20,
        },
      },
    });
    mark = computed(() => {
      return marked;
    });
    function showRawPerson() {
      // toRaw将响应式reactive的对象转换为普通对象
      const p = toRaw(person);
      // p.age++;
      console.log(p);
    }
    function addCar() {
      const car = { name: "奥迪", price: "80W" }; //从外部接收的数据 而且不希望我们修改 而且层次很深 我们就可以markRaw标记为普通对象，vue就不会进行响应式处理了，提高性能
      // markRaw
      person.car = markRaw(car);
    }
    function modifyCarPrice() {
      person.car.price++;
      console.log(person.car.price);
    }

    return {
      sum,
      person,
      ...toRefs(person),
      addCar,
      showRawPerson,
      modifyCarPrice,
    };
  },
};
</script>

