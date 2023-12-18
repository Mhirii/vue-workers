<script lang="ts" setup>
import { ref } from "vue";
import axios from 'axios'

import FormField from "./FromField.vue"

const email = ref("");
const password = ref("");

const headers = {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*",
};
const signup = async () => {
  const response = await axios.post("https://hono.ahmedmhiri218.workers.dev/signup", {
    email: email.value,
    password: password.value
  }, { headers })
  console.log(response.data)
}
</script>

<template>
  <form action="" :onsubmit="(e /*@ts-ignore e is implicit any */) => e.preventDefault()"
    class="flex flex-col gap-4 items-center">
    <h2 class="text-2xl text-indigo-200">Welcome</h2>

    <FormField name="email" placeholder="Email" type="email" :required="true" @update-value="(v) => (email = v)" />
    <FormField name="password" placeholder="Password" type="password" :required="true"
      @update-value="(v) => (password = v)" />

    <button type="submit"
      class="p-2 w-full bg-indigo-700 text-base font-medium rounded hover:shadow-sm hover:bg-indigo-700/50 hover:text-indigo-300 border border-indigo-500/50 hover:border-indigo-500"
      @click="async () => { await signup() }">
      Sign Up
    </button>
  </form>
</template>

<style lang="scss" scoped></style>