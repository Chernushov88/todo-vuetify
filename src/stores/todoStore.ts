import { defineStore } from 'pinia'

export interface Task {
  id: number
  title: string
  completed: boolean
  selected?: boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [] as Task[],
  }),

  actions: {
    async fetchTasks() {
      if (this.tasks.length > 0) return // якщо вже є дані
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      const data = await res.json()
      this.tasks = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        completed: item.completed,
        selected: false,
      }))
    },

    addTask(title: string) {
      const task: Task = {
        id: Date.now(),
        title,
        completed: false,
        selected: false,
      }
      this.tasks.unshift(task)
    },

    updateTask(id: number, title: string) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.title = title
    },

    toggleComplete(id: number) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.completed = !task.completed
    },

    deleteTask(id: number) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },

    deleteSelected() {
      this.tasks = this.tasks.filter(t => !t.selected)
    },
  },
})