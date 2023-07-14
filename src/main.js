import { createApp } from 'vue'
import router from './router';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'

console.log("env:", process.env)
const app = createApp(App)
app.use(Antd)
app.use(router)
app.mount('#app')
