import { createRouter, createWebHistory } from 'vue-router';
import TodoView from '@/views/TDTodoView.vue';
import ContactView from '@/views/TDContactView.vue';
import { useAuthStore } from '@/stores/auth';
import LoginPage from '@/views/TDLoginPage.vue';
import ProfilePage from '@/views/TDProfilePage.vue';
import RegisterPage from '@/views/TDRegisterPage.vue';


const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/',
    name: 'home',
    component: () => ProfilePage,
    meta: { requiresAuth: true },
  },  
  {
    path: '/todo', 
    name: 'Todo',
    component: TodoView,
  },
  {
    path: '/contact', 
    name: 'Contact',
    component: ContactView,
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