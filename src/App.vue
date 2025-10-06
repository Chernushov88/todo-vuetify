<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>Todo-test project with Vuetify</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn text to="/">
        Todo List
      </v-btn>
      <v-btn text to="/contact">
        Contacts
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  // name: 'App',
};
</script>