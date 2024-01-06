import { createRouter, createWebHistory } from 'vue-router';
import LoginVue from '@/pages/Auth/Login.vue';
import RegisterVue from '@/pages/Auth/Register.vue';

const routes = [
  { path: '/', component: RegisterVue },
  { path: '/login', component: LoginVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
