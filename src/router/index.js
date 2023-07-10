import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/auth/loginView.vue';
import Register from '@/views/auth/registerView.vue';
import LayoutView from '@/views/layoutView';
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/',
    name: 'LayoutView',
    component: LayoutView,
  },
  // 其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
