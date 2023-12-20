import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useUI = defineStore('ui', () => {
  const sidebarOpen = ref(false)

  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  return {
    sidebarOpen,
    toggleSidebar
  }
})
