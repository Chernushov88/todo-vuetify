<template>
  <v-list-item class="d-flex align-center justify-space-between">
    <v-checkbox
      v-model="task.completed"
      density="compact"
      @change="toggleComplete"
    />

    <v-text-field
      v-if="editing"
      v-model="editedTitle"
      density="compact"
      @keyup.enter="saveEdit"
      @blur="saveEdit"
      autofocus
    />

    <span
      v-else
      :class="{ 'text-decoration-line-through text-grey': task.completed }"
      @dblclick="startEdit"
    >
      {{ task.title }}
    </span>

    <div class="d-flex align-center">
      <v-btn icon="mdi-pencil" size="small" variant="text" @click="startEdit" />
      <v-btn icon="mdi-delete" size="small" variant="text" color="error" @click="deleteTask" />
      <v-checkbox v-model="task.selected" density="compact" />
    </div>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore, type Task } from '@/stores/todoStore'

const props = defineProps<{ task: Task }>()
const store = useTodoStore()

const editing = ref(false)
const editedTitle = ref(props.task.title)

function startEdit() {
  editing.value = true
  editedTitle.value = props.task.title
}

function saveEdit() {
  if (editedTitle.value.trim() && editing.value) {
    store.updateTask(props.task.id, editedTitle.value)
  }
  editing.value = false
}

function toggleComplete() {
  store.toggleComplete(props.task.id)
}

function deleteTask() {
  store.deleteTask(props.task.id)
}
</script>