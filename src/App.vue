<template>
  <v-app>
    <TDNav />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import TDNav from './components/TDNav.vue';
</script>
