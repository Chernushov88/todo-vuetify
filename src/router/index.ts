import { createRouter, createWebHistory } from 'vue-router';
import TodoView from '@/views/TDTodoView.vue';
import ContactView from '@/views/TDContactView.vue';

const routes = [
  {
    path: '/', 
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

export default router;


