/*
 * @Date         : 2021-10-12 15:48:55
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-14 13:57:42
 * @FilePath     : \src\store\index.ts
 */
import { createStore } from "vuex";

import user, { UserState } from "./user/user";

export interface State {
  count: number;
  user?: UserState;
}

export const store = createStore<State>({
  state: {
    count: 0
  } as State,
  getters: {
    num: (state: State) => state.user?.num || ""
  },
  mutations: {
    increment(state: State) {
      state.count += 1;
    }
  },
  actions: {},
  modules: {
    user
  }
});
