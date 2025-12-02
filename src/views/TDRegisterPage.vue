<template>
  <div class="pa-4" style="max-width: 400px; margin: 0 auto;">
    <h2 class="text-center mb-4">Register</h2>

    <v-form @submit.prevent="onSubmit">
      <v-text-field
        label="Username"
        v-model="username"
        required
      />

      <v-text-field
        label="Password"
        v-model="password"
        type="password"
        required
      />

      <v-btn type="submit" color="primary" block :loading="auth.loading">
        Create account
      </v-btn>

      <v-alert v-if="auth.error" type="error" class="mt-4">
        {{ auth.error }}
      </v-alert>

      <div class="text-center mt-4">
        <RouterLink to="/login">Already have account?</RouterLink>
      </div>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

const username = ref('');
const password = ref('');

const onSubmit = () => {
  auth.register({
    username: username.value,
    password: password.value
  });
};
</script>
