import axios from 'axios';

// 创建一个 axios 实例
const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // 后端接口的基础 URL
  timeout: 5000, // 请求超时时间
});

// 设置请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 在请求发送之前可以进行一些处理，例如添加认证头部等
    if (config.method === "post" && config.url === "/index"){
        console.log('test')
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 设置响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理
    return response;
  },
  (error) => {
    // 处理响应错误
    if (error.response && error.response.status === 401) {
        // 重定向到登录页面
        window.location.href = '/login';
      }
    return Promise.reject(error);
  }
);

// 定义访问后端接口的方法
export default {
  // 示例方法：获取用户列表
  get() {
    return apiClient.get('/users');
  },

  // 示例方法：创建用户
  post(url, params) {
    return apiClient.post(url, params);
  },

  // 示例方法：更新用户
  put(userId, userData) {
    return apiClient.put(`/users/${userId}`, userData);
  },

  // 示例方法：删除用户
  delete(userId) {
    return apiClient.delete(`/users/${userId}`);
  },
};
