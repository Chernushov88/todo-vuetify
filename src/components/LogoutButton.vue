<template>
  <v-btn variant="text" prepend-icon="mdi-logout" @click="handleLogout">
    Login
  </v-btn>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
};
</script>
