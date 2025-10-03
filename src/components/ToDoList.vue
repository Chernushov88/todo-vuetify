<template>
  <v-container class="py-5">
    <v-card class="pa-4">
      <v-card-title>📌 Todo List</v-card-title>

      <v-text-field
        v-model="newTask"
        label="Нове завдання"
        outlined
        @keyup.enter="addTask"
      />
      <v-btn color="primary" class="mt-2" @click="addTask">Додати</v-btn>

      <v-list>
        <v-list-item
          v-for="task in tasks"
          :key="task.id"
        >
          <v-checkbox
            v-model="task.completed"
            :label="task.title"
          />
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const tasks = ref([])
const newTask = ref("")


onMounted(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  tasks.value = await res.json()
})


function addTask() {
  if (!newTask.value.trim()) return
  tasks.value.unshift({
    id: Date.now(),
    title: newTask.value,
    completed: false
  })
  newTask.value = ""
}
</script>