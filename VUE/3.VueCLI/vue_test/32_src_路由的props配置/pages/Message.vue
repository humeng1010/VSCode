<template>
  <div>
    <ul>
      <li v-for="m in message" :key="m.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link>
        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <!-- <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link> -->
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">
          {{ m.title }}
        </router-link> -->
        <!-- 跳转路由并携带params参数，to的对象写法 注意 对象写法不能写path 只能写name -->
        <!-- <router-link
          :to="{
            name: 'xiangqing',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link> -->
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
};
</script>

<style>
</style>