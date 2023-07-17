import apiClient from '@/views/apiControl'
const apiManagement = {
    // 登录
    login(params) {
      return apiClient.post('/auth/login', params);
    },
    hasLogined(params) {
      return apiClient.post('/index', params);
    },
    register(params) {
      return apiClient.post('/auth/register', params);
    },
    getVerificationCode(params) {
      return apiClient.post('/auth/verification-code', params);
    },
    getGenerateText(params) {
      return apiClient.post('/openai/generate', params);
    }
  
};
  
// 导出管理模块
export default {
    apiManagement,
};