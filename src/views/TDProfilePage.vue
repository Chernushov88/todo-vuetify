<template>
  <v-container>
    <v-card class="mx-auto" max-width="600">
      <v-card-title class="text-h5">Your profile</v-card-title>
      <v-card-text>
        <p class="mb-4">
          Hi, **{{ authStore.user?.username || "Користувач" }}**! This is a page
          accessible only to authenticated users.
        </p>

        <v-btn
          color="red"
          prepend-icon="mdi-logout"
          @click="authStore.logout()"
        >
          Logout
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>
