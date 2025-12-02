<template>
  <v-app-bar app color="primary" dark>
      <v-app-bar-title>Chernyshov</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-if="auth.isLoggedIn">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/todo">Todo List</v-btn>
        <v-btn text to="/contact">Contacts</v-btn>
        <v-btn class="text-red" @click="auth.logout()">Logout</v-btn>
        <span class="pa-5 bg-lime-accent-1">{{ auth.user.username }}</span>
        
      </template>  
      <template v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Registration</v-btn>
      </template>
      
    </v-app-bar>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
</script>