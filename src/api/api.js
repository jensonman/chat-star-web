import apiClient from '@/views/apiControl'
const apiManagement = {
    // 登录
    login(params) {
      return apiClient.post('/auth/login', params);
    },
    test: "test"
  
};
  
// 导出管理模块
export default {
    apiManagement,
};