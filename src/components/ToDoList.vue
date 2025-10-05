<template>
  <v-container class="py-6">
    <v-card class="pa-4 mx-auto" max-width="1024">
      <v-card-title class="text-h6">
        <v-icon left>mdi-format-list-bulleted</v-icon>
        Список завдань
      </v-card-title>

      <v-divider class="mb-4" />

      <TodoToolbar />

      <v-list>
        <TodoItem v-for="task in store.tasks" :key="task.id" :task="task" />
      </v-list>

      <v-alert
        v-if="!store.tasks.length"
        type="info"
        variant="outlined"
        class="mt-4"
      >
        Список порожній. Додайте нове завдання!
      </v-alert>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
import TodoItem from './TodoItem.vue'
import TodoToolbar from './TodoToolbar.vue'

const store = useTodoStore()

onMounted(async () => {
  await store.fetchTasks()
})
</script>