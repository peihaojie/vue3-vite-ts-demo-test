/*
 * @Date         : 2021-10-14 14:07:24
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-14 14:21:52
 * @FilePath     : \src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: () => import("@/views/home.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  }
});

export default router;
