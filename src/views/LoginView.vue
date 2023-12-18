<script lang="ts" setup>
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
import { ref } from 'vue'
const signup = ref(false)
</script>

<template >
  <div class="w-screen h-screen bg-indigo-700 flex items-center justify-center">
    <div class="bg-slate-900 p-4 w-fit shadow border border-slate-700/50 rounded flex flex-col gap-4 items-center">
      <LoginForm v-if="!signup" />
      <SignupForm v-if="signup" />
      <p>
        {{ signup ? "Already have an Account?" : "Don't have an Account?" }}
        <a class="font-medium" @click="() => (signup = !signup)">{{ signup ? 'Login' : 'Sign Up' }} </a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" >
* {
  @apply transition-all duration-100
}
</style>