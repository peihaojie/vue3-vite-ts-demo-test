/*
 * @Date         : 2021-10-11 09:24:30
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-11 15:03:10
 * @FilePath     : \src\env.d.ts
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
