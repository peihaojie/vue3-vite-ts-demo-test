/*
 * @Date         : 2021-10-14 14:37:05
 * @LastEditors  : HaoJie
 * @LastEditTime : 2021-10-14 14:46:44
 * @FilePath     : \src\httpRequest\index.ts
 */
import axios from "axios";
import { ElMessageBox } from "element-plus";

const config = {
  // baseURL: process.env.baseURL
  baseURL: "https://www.baidu.com/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

const api = axios.create(config);

// 默认 post 请求，使用 application/json 形式
api.defaults.headers.post["Content-Type"] = "application/json";

// 封装下post
api.post = function (url, params) {
  return new Promise((resolve, reject) => {
    // console.log("****************************");
    axios({
      method: "post",
      url: config.baseURL + url,
      params,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }).then((response) => {
      if (response.status == 200) {
        // 根据实际情况进行更改
        resolve(response);
      } else {
        reject(response);
      }
    });
  });
};

// http response 拦截器
api.interceptors.response.use(
  (response) => {
    // 拦截响应，做统一处理
    if (response.data.code) {
      // console.log(response.status);
      switch (response.status) {
        case 301:
          console.log("登录过期");
        // store.state.isLogin = false
        // router.replace({
        //   path: 'login',
        //   query: {
        //     redirect: router.currentRoute.fullPath
        //   }
        // })
      }
    }
    return response;
  },
  // 接口错误状态处理，也就是说无响应时的处理
  (error) => {
    return Promise.reject(error.response.status); // 返回接口返回的错误信息
  }
);

export default axios;
