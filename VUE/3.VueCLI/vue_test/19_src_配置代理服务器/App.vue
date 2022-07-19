<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getTeacher">获取老师信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/api/student").then(
        (res) => {
          console.log("请求成功", res.data);
        },
        (err) => {
          console.log("请求失败", err.message);
        }
      );
    },
    async getTeacher() {
      const res = await axios.get("http://localhost:8080/api/teacher");
      console.log(res.data);
    },
  },
};
</script>

<style>
</style>