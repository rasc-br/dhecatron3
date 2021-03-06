import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/views/MainView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dhecatron',
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
