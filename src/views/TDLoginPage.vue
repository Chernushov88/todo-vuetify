<template>
  <v-container fill-height class="d-flex align-center justify-center">
    <v-card class="mx-auto" width="400">
      <v-card-title class="text-h5">Login to CRM</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="username"
            label="User name"
            prepend-icon="mdi-account"
            variant="underlined"
            required
            :rules="[(v) => !!v || 'Enter username (test)']"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            type="password"
            variant="underlined"
            required
            :rules="[(v) => !!v || 'Enter password (123)']"
          ></v-text-field>

          <v-alert
            v-if="authStore.error"
            type="error"
            density="compact"
            class="mt-3 mb-3"
          >
            {{ authStore.error }}
          </v-alert>

          <v-btn
            color="primary"
            block
            class="mt-4"
            type="submit"
            :loading="authStore.loading"
            :disabled="authStore.loading"
          >
            Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const username = ref("");
const password = ref("");

const handleLogin = async () => {
  await authStore.login({ username: username.value, password: password.value });
};
onUnmounted(() => {
  authStore.clearError();
});
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
