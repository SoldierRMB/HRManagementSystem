import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue';
import MainView from '@/views/MainView.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
