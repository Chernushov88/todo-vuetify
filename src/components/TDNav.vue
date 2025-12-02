<template>
  <v-app-bar app color="primary" dark>
      <v-app-bar-title>Chernyshov</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-if="auth.isLoggedIn">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/todo">Todo List</v-btn>
        <v-btn text to="/contact">Contacts</v-btn>
        <v-btn text-red @click="auth.logout()">Logout</v-btn>
      </template>  
      
    </v-app-bar>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
</script>