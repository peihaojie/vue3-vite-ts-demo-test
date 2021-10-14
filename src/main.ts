/*
 * @Date         : 2021-10-11 09:24:30
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-14 14:44:37
 * @FilePath     : \src\main.ts
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import { store } from "@/store";
import router from "@/router/routerConfig";
import "element-plus/dist/index.css";
import axios from "@/httpRequest";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);

app.config.globalProperties.$axios = axios;

app.mount("#app");
