<template>
  <div>
    <ul>
      <li v-for="m in message" :key="m.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link> -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>

        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
      <hr />
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      message: [
        { id: "001", title: "message001" },
        { id: "002", title: "message002" },
        { id: "003", title: "message003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        path: "/home/message/detail",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        path: "/home/message/detail",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style>
</style>