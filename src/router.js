import { createRouter, createWebHistory } from 'vue-router';
import LoginVue from '@/pages/Auth/Login.vue';
import RegisterVue from '@/pages/Auth/Register.vue';
import HomeVue from '@/pages/Home/Home.vue';
import ActuVue from './pages/Actu/Actu.vue';
import authGuard from './medealwer/authGuard';


const routes = [
  { path: '/', component: HomeVue },
  { path: '/register', component: RegisterVue },
  { path: '/login', component: LoginVue },
  { path: '/actu', component: ActuVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
