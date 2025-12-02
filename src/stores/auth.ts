import { defineStore } from 'pinia';
import router from '@/router'; 

interface User {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false as boolean,
    user: null as User | null,
    loading: false as boolean,
    error: null as string | null,
  }),
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
  },
  actions: {
    initializeAuth() {
      const savedUser = localStorage.getItem('user')
      const savedAuth = localStorage.getItem('auth')
      
      if(savedAuth === 'true' && savedUser){
        this.isAuthenticated = true
        this.user = JSON.parse(savedUser)
      }
      this.initDefaultUser();
    },
    initDefaultUser() {
      const usersStr = localStorage.getItem('users')
      let users: User[] = usersStr ? JSON.parse(usersStr) : []

      const testUser = users.find(u => u.username === 'test')
      if(!testUser) {
        users.push({username: 'test', password: '123' })
        localStorage.setItem('users', JSON.stringify(users))
      }
    },
    async login(credentials: User) {
      this.loading = true;
      this.error = null;

      await new Promise(resolve => setTimeout(resolve, 1000)); 

      const usersStr = localStorage.getItem('users');
      const users: User[] = usersStr ? JSON.parse(usersStr) : [];

      const foundUser = users.find(u => {
        return u.username === credentials.username && u.password == credentials.password
      })

      if(!foundUser){
        this.error = 'Incorrect username or password.';
        this.loading = false;
        return
      }

      this.isAuthenticated = true;
      this.user = foundUser

      localStorage.setItem('auth', 'true')
      localStorage.setItem('user', JSON.stringify(this.user))

      router.push('/');
      this.loading = false
    },
    async register(userData: User) {
      this.loading = true;
      this.error = null;

      await new Promise(res => setTimeout(res, 600));

      const usersStr = localStorage.getItem('users');
      let users: User[] = usersStr ? JSON.parse(usersStr) : [];

      const exists = users.some(u => u.username === userData.username);

      if (exists) {
        this.error = 'User with this username already exists.';
        this.loading = false;
        return;
      }

      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));

      this.isAuthenticated = true;
      this.user = userData;

      localStorage.setItem('auth', 'true');
      localStorage.setItem('user', JSON.stringify(userData));

      router.push('/');
      this.loading = false;
    },

    logout() {
      this.isAuthenticated = false;
      this.user = null;

      localStorage.removeItem('auth')
      localStorage.removeItem('user')
      router.push('/login');
    },

    clearError() {
      this.error = null;
    },
  },
});