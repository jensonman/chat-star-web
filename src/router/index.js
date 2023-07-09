import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login/loginView.vue';
import LayoutView from '@/views/layoutView';
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
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
