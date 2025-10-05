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

interface Task {
  id: number
  title: string
  completed: boolean
}

const tasks = ref<Task[]>([])
const newTask = ref<string>('')

onMounted(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  const data = await res.json()
  tasks.value = data.map((item: any) => ({
    id: item.id,
    title: item.title,
    completed: item.completed,
  })) as Task[]
})

function addTask(): void {
  const title = newTask.value.trim()
  if (!title) return

  const newItem: Task = {
    id: Date.now(),
    title,
    completed: false,
  }

  tasks.value.unshift(newItem)
  newTask.value = ''
}
</script>