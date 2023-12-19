import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useAuth = defineStore('auth', () => {
  const local = JSON.parse(localStorage.getItem('auth'))

  const id = ref(local?.id ? local.id : '')
  const email = ref(local?.email ? local.email : '')
  const access_token = ref(local?.access_token ? local.access_token : '')
  const refresh_token = ref(local?.refresh_token ? local.refresh_token : '')
  const username = computed(() => {
    return email.value.split('@')[0]
  })
  function logout() {
    id.value = ''
    email.value = ''
    access_token.value = ''
    refresh_token.value = ''
    localStorage.removeItem('auth')
  }
  function persistToLocalStorage() {
    localStorage.setItem(
      'auth',
      JSON.stringify({
        id: id.value,
        email: email.value,
        access_token: access_token.value,
        refresh_token: refresh_token.value
      })
    )
  }
  return {
    id,
    email,
    access_token,
    refresh_token,
    username,
    logout,
    persistToLocalStorage
  }
})
