/*
 * @Date         : 2021-10-14 14:19:55
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-14 14:24:31
 * @FilePath     : \src\router\routerConfig.ts
 */
import router from "./index";

router.beforeResolve(async (to) => {
  // if (to.meta.requiresCamera) {
  //   try {
  //     await askForCameraPermission();
  //   } catch (error) {
  //     if (error instanceof NotAllowedError) {
  //       // ... 处理错误，然后取消导航
  //       return false;
  //     } else {
  //       // 意料之外的错误，取消导航并把错误传给全局处理器
  //       throw error;
  //     }
  //   }
  // }
  console.log(to);
  return true;
});

export default router;
