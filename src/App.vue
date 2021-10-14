<!--
 * @Date         : 2021-10-11 09:24:30
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-14 14:45:19
 * @FilePath     : \src\App.vue
-->
<script lang="ts">
// console.log(import.meta.env)

import HelloWorld from "./components/HelloWorld.vue";
import { onMounted, onUpdated, onUnmounted, getCurrentInstance } from "vue";
export default {
  name: "APP",
  components: { HelloWorld },
  setup() {
    const { proxy } = getCurrentInstance();
    proxy.$axios
      .post("/api/URL/GETLIST", {
        params: {}
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>

<template lang="pug">
div
  img(alt="Vue logo" src="./assets/logo.png")
  //- HelloWorld(msg="我觉得行")
  el-button I am ElButton
  router-view
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
