<!--
 * @Date         : 2021-10-11 09:24:30
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-14 14:09:43
 * @FilePath     : \src\views\home.vue
-->
<script lang="ts">
import { toRefs, ref, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const count = ref<number>(0);
    const store = useStore();

    function add() {
      store.commit("user/changeNum");
    }

    return { count, add };
  }
});
</script>

<template lang="pug">
div
  h2(@click="add") 这里是vuex {{ $store.getters.num }}

  p Recommended IDE setup:
    a(href="https://code.visualstudio.com/" target="_blank") VSCode+
    a(href="https://github.com/johnsoncodehk/volar" target="_blank") Volar

  p See
    code README.md
    span for more information.

  p
    a(href="https://vitejs.dev/guide/features.html" target="_blank") Vite Docs |
    a(href="https://v3.vuejs.org/" target="_blank") Vue 3 Docs

  button(type="button" @click="count++") count is: {{ count }}
  p Edit
    code components/HelloWorld.vue
    span to test hot module replacement.
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
