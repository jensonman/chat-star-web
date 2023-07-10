<template>
  <div class="login-container">
    <a-row class="login-header">
      <a-col :span="24">
        <h1 class="login-title">登 录</h1>
      </a-col>
    </a-row>
    <a-row class="login-content">
      <a-col :span="12" :offset="6">
        <a-card class="login-card">
          <h2 class="login-card-title">
            <a-alert :message="'错误：'+ resData.message" type="error" show-icon v-if="!resData.success">
                <template #icon><smile-outlined /></template>
            </a-alert>
          </h2>
          <a-form :form="form" @submit="login" class="login-form">
            <a-form-item>
              <a-input v-model:value="email" prefix-icon="user" placeholder="email"></a-input>
            </a-form-item>
            <a-form-item>
              <a-input v-model:value="password" prefix-icon="lock" type="password" placeholder="password"></a-input>
            </a-form-item>
            <a-form-item>

              <a-button type="primary" html-type="submit">登 录</a-button>
            </a-form-item>
            <a-form-item>
              <div class="login-links">
                <a href="#" @click="forgotPassword">忘记密码?</a>
                <span class="login-link-divider">|</span>
                <a href="#" @click="register">注册</a>
              </div>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { Form, Input, Button, Card, Row, Col } from 'ant-design-vue';
import { SmileOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import api from '../../api/api'
export default {
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button,
    ACard: Card,
    ARow: Row,
    ACol: Col,
    SmileOutlined
  },
  setup() {
    const router = useRouter();
    const form = Form.useForm();
    const email = ref('');
    const password = ref('');
    let resData = reactive({
      success: true,
      message: ''
    })

    const login = async () => {
      if (email.value === '' || password.value === '') {
        resData.success = false
        resData.message = '输入不能为空！'
        return
      }

      try {
        let res = await api.apiManagement.login({
          email: email.value,
          password: password.value,
        })
        resData.success = res.data.success
        resData.message = res.data.message || ''
        localStorage.setItem('access_token', 'Bearer '+ res.data.access_token)
        if(resData.success){
          router.push('/')
        }
        // Object.assign(resData, res)
      } catch (error) {
        console.error('Login failed', error);
      } 
    };

    const forgotPassword = () => {
      // 处理忘记密码的逻辑，例如打开忘记密码页面或弹出重置密码的对话框
    };

    const register = () => {
      // 处理注册的逻辑，例如打开注册页面或弹出注册对话框
    };

    return {
      form,
      email,
      password,
      resData,
      // isLoading,
      login,
      forgotPassword,
      register,
    };
  },
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-header {
  margin-bottom: 2rem;
}

.login-title {
  text-align: center;
  font-size: 2rem;
}

.login-content {
  width: 100%;
}

.login-card {
  max-width: 400px;
  margin: 0 auto;
}

.login-card-title {
  text-align: center;
  margin-bottom: 1rem;
}

.login-form {
  width: 100%;
}

.login-content ::v-deep .ant-alert.ant-alert-error {
  border-radius: 10px;
}
.login-links {
  text-align: center;
}

.login-link-divider {
  margin: 0 0.5rem;
}
</style>
