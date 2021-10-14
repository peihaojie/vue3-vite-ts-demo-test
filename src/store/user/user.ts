/*
 * @Date         : 2021-10-13 14:47:36
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-14 13:57:55
 * @FilePath     : \src\store\user\user.ts
 */
export interface UserState {
  num: number;
}

export default {
  namespaced: true,
  state: {
    num: 1
  } as UserState,
  getters: {},
  mutations: {
    changeNum(state: UserState) {
      state.num += 1;
    }
  },
  actions: {}
};
