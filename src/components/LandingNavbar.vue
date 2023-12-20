<script lang="ts" setup>
import { useAuth } from '@/stores/auth';

const auth = useAuth()
const buttonText = auth.access_token ? 'dashboard' : 'Login'
</script>

<template>
  <div class="w-full h-10 bg-slate-700"></div>
  <nav
    class="fixed top-0 w-full h-10 bg-slate-700/50 backdrop-blur shadow shadow-slate-900/50 border-b border-indigo-500/25 flex flex-row justify-between items-center px-4 gap-4">
    <div class="left-side flex flex-row gap-2">
      <a href="#">home</a>
      <a href="#">about</a>
    </div>
    <div class="right-side">
      <router-link :to="auth.access_token ? '/dashboard' : '/auth'" custom v-slot="{ navigate }">
        <button class="px-2 py-1 bg-indigo-500 rounded hover:bg-indigo-600 capitalize" @click="navigate" role="link">
          {{ buttonText }}
        </button>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a {
  @apply text-slate-200/75 hover:text-slate-200
}
</style>