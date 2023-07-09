import { createApp } from 'vue'
import router from './router';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'


const app = createApp(App).use(Antd).use(router)
app.mount('#app')
