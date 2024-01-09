import { createRouter, createWebHistory } from 'vue-router';
import LoginVue from '@/pages/Auth/Login.vue';
import RegisterVue from '@/pages/Auth/Register.vue';
import HomeVue from '@/pages/Home/Home.vue';
import ActuVue from './pages/Actu/Actu.vue';

const routes = [
  { path: '/', component: RegisterVue },
  { path: '/login', component: LoginVue },
  { path: '/home', component: HomeVue },
  { path: '/actu', component: ActuVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
