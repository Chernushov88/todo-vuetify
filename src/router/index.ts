import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterPage.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/TDProfilePage.vue'),
    meta: { requiresAuth: true },
  },  
  {
    path: '/todo', 
    name: 'Todo',
    component: () => import('@/views/TodoView.vue'),
  },
  {
    path: '/contact', 
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ name: 'login' });
  } else if (to.name === 'login' && authStore.isLoggedIn) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;