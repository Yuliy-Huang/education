import axios from 'axios';
import { ElMessage } from 'element-plus';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
    token: 'your token',
    'X-Requested-With': 'XMLHttpRequest',
  },
  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 0; // default
  },
});
// request请求拦截器 主要来注入token
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return error;
  }
);
service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    if (
      error.response &&
      error.response.status &&
      error.response.status === 303
    ) {
      // window.location.href =
    } else {
      ElMessage({
        message: error.message,
        type: 'error',
        duration: 5 * 1000,
        showClose: true,
      });
      return Promise.reject(error);
    }
  }
);
export default service;
