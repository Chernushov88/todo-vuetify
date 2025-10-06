<template>
  <v-row class="align-center mb-4">
    <v-col cols="8">
      <v-text-field
        v-model="newTask"
        label="New task"
        prepend-inner-icon="mdi-playlist-plus"
        density="comfortable"
        variant="outlined"
        @keyup.enter="addTask"
      />      
    </v-col>
    <v-col cols="4 " class="text-right">
      <v-btn color="primary" @click="addTask" class="mr-2">
        <v-icon left>mdi-plus</v-icon> Add
      </v-btn>
    </v-col>

    <v-col cols="12" class="text-right">      
      <v-btn color="error" variant="outlined" @click="deleteSelected">
        <v-icon left>mdi-delete</v-icon> Delete selected
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoStore'

const store = useTodoStore()
const newTask = ref('')

function addTask() {
  if (newTask.value.trim()) {
    store.addTask(newTask.value)
    newTask.value = ''
  }
}

function deleteSelected() {
  store.deleteSelected()
}
</script>