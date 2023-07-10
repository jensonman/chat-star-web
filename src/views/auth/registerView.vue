<template>
    <div class="register-container">
      <a-row class="register-header">
        <a-col :span="24">
          <h1 class="register-title">注 册</h1>
        </a-col>
      </a-row>
      <a-row class="register-content">
        <a-col :span="12" :offset="6">
          <a-card class="register-card">
            <h2 class="register-card-title">
              <a-alert :message="'错误：'+ resData.message" type="error" show-icon v-if="!resData.success">
                  <template #icon><smile-outlined /></template>
              </a-alert>
            </h2>
            <a-form :form="form" class="register-form">
              <a-form-item>
                <a-input v-model:value="email" prefix-icon="user" placeholder="email"></a-input>
              </a-form-item>
              <a-form-item>
                <a-input v-model:value="password" prefix-icon="lock" type="password" placeholder="password"></a-input>
              </a-form-item>
              <a-form-item>
                <a-input @blur="checkPasswordMatch" v-model:value="rePassword" prefix-icon="lock" type="password" placeholder="re-enter password"></a-input>
              </a-form-item>
              <a-form-item>
                <a-input v-model:value="authCode" type="number" placeholder="auth code">
                </a-input>
                <a-button style="right: 0px;position: absolute;width:100px" type="primary" @click="handleSendCode">{{ buttonText }}</a-button>
              </a-form-item>

              <a-form-item>
                <a-button @click="handleRegister" type="primary" html-type="submit">注 册</a-button>
              </a-form-item>
              <a-form-item>
                <div class="register-links">
                  <a href="#" @click="forgotPassword">忘记密码?</a>
                  <span class="register-link-divider">|</span>
                  <a href="#" >登录</a>
                </div>
              </a-form-item>
            </a-form>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </template>
  
  <script>
  import { ref, reactive,computed } from 'vue';
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
      const rePassword = ref('');
      const authCode = ref()
      const isCountingDown = ref(false)
      const countDownSeconds = ref(60)
      let resData = reactive({
        success: true,
        message: ''
      })
  
      const handleRegister = async () => {
        if (email.value === '' || password.value === '' || rePassword.value === '' || !authCode.value ) {
          resData.success = false
          resData.message = '输入不能为空！'
          return
        }
  
        try {
          let res = await api.apiManagement.register({
            email: email.value,
            password: password.value,
            code: authCode.value
          })
          resData.success = res.data.success
          resData.message = res.data.data.message ?? ''
          if(resData.success){
            router.push('/')
          }
          // Object.assign(resData, res)
        } catch (error) {
          console.error('register failed', error);
        } 
      };

      const checkPasswordMatch = () => {
        if (password.value !== rePassword.value) {
            resData.success = false
            resData.message = "两次输入的密码不一致！"
        }else{
            resData.success = true
        }
      }

      const handleSendCode = async () => {
        if (isCountingDown.value === true) return 
        if (email.value !== "") {
            isCountingDown.value = true
            let resRegister = await api.apiManagement.getVerificationCode({email:email.value})
            resData.success = resRegister.data.success ?? false
            resData.message = resRegister.data.data.message ?? ""
        } else {
            resData.success = false
            resData.message = "请先输入邮箱！"
            return
        }
        countDownSeconds.value = 60
        isCountingDown.value = true
        startCountDown()
      }
      const startCountDown = () => {
        let seconds = countDownSeconds.value
        const timer = setInterval(() => {
            seconds--
            if (seconds <= 0) {
                clearInterval(timer)
                isCountingDown.value = false
            }
            countDownSeconds.value = seconds
        }, 1000)
      }
      const buttonText = computed(() => {
        return isCountingDown.value ? `倒计时${countDownSeconds.value}s` : '发送验证码' ;
      });

      return {
        form,
        email,
        password,
        rePassword,
        authCode,
        resData,
        isCountingDown,
        buttonText,
        // isLoading,
        handleRegister,
        checkPasswordMatch,
        handleSendCode,
        
      };
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .register-header {
    margin-bottom: 2rem;
  }
  
  .register-title {
    text-align: center;
    font-size: 2rem;
  }
  
  .register-content {
    width: 100%;
  }
  
  .register-card {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .register-card-title {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .register-form {
    width: 100%;
  }
  
  .register-content ::v-deep .ant-alert.ant-alert-error {
    border-radius: 10px;
  }
  .register-links {
    text-align: center;
  }
  
  .register-link-divider {
    margin: 0 0.5rem;
  }
  </style>
  