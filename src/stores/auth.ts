import { defineStore } from 'pinia';
import router from '@/router'; 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false as boolean,
    user: null as { username: string } | null,
    loading: false as boolean,
    error: null as string | null,
  }),
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
  },
  actions: {
    async login(credentials: { username: string; password: string }) {
      this.loading = true;
      this.error = null;

      await new Promise(resolve => setTimeout(resolve, 1000)); 

      if (credentials.username === 'test' && credentials.password === '123') {
        this.isAuthenticated = true;
        this.user = { username: credentials.username };
        router.push('/');
      } else {
        this.error = 'Incorrect username or password.';
      }
      
      this.loading = false;
    },

    logout() {
      this.isAuthenticated = false;
      this.user = null;
      router.push('/login');
    },
  },
});