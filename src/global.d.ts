/*
 * @Date         : 2021-10-11 09:24:30
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-14 14:31:08
 * @FilePath     : \src\global.d.ts
 */

/* eslint-disable */
// @ts-nocheck

declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@vue/runtime-core" {
  import type { ComponentCustomProperties } from "vue";
  import type { Store } from "vuex";
  import type { State } from "./store/index";

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_BASE: string;
  readonly VITE_API: string;
}

// eslint-disable-next-line
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
