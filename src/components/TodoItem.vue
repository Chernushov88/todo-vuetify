<template>
  <v-list-item class="py-1">
    <v-row class="d-flex align-start justify-space-between full-width">
      <v-col cols="1" class="px-2 align-start pb-0">
        <v-checkbox
          :model-value="task.completed"
          density="compact"
          @update:model-value="toggleComplete"
        />
      </v-col>
      <v-col cols="8" class="px-2 pb-0">
        <v-text-field
          v-if="editing"
          v-model="editedTitle"
          density="compact"
          @keyup.enter="saveEdit"
          @blur="saveEdit"
          autofocus
          :disabled="task.completed"
          :class="{ 'text-decoration-line-through text-grey': task.completed }"
        />

        <span
          v-else
          :class="{ 'text-decoration-line-through text-grey': task.completed }"
          @dblclick="startEdit"
        >
          {{ task.title }}
        </span>
      </v-col>
      <v-col cols="3" class="px-2 pt-1 pb-0">
        <div class="d-flex">
          <v-btn icon="mdi-pencil" size="small" variant="text" @click="startEdit" :disabled="task.completed"/>
          <v-btn icon="mdi-delete" size="small" variant="text" color="error" @click="deleteTask" />
          <v-checkbox v-model="task.selected" density="compact" class="pt-1"/>
        </div>
      </v-col>
    </v-row>  
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
  if (props.task.completed) return
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
<style lang="scss">
.v-checkbox .v-selection-control{
  align-items: start;
}
</style>