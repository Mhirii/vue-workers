<script lang="ts" setup>
import { ref } from "vue";
import axios from 'axios'

import FormField from "./FromField.vue"
import { useAuth } from "@/stores/auth";

const auth = useAuth()


const email = ref("");
const password = ref("");
const headers = {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*",
};

import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import router from "@/router";

const $toast = useToast();
let instance = $toast.success('You did it!');
// Force dismiss specific toast
instance.dismiss();

// Dismiss all opened toast immediately
$toast.clear();

const login = async () => {
  try {
    await axios.post("https://hono.ahmedmhiri218.workers.dev/login", {
      email: email.value,
      password: password.value
    }, { headers }).then((response) => {
      auth.id = response.data.user.id
      auth.access_token = response.data.session.access_token
      auth.refresh_token = response.data.session.refresh_token
      auth.email = response.data.user.email
      auth.persistToLocalStorage()
      router.replace({ name: 'dashboard' })
    })

  } catch (err) {
    console.log(err)
    $toast.open({
      message: 'Invalid email or password',
      type: 'error',
      position: 'top'
    });
  }
}

</script>

<template>
  <form action="" :onsubmit="(e /*@ts-ignore e is implicit any */) => e.preventDefault()"
    class="flex flex-col gap-4 items-center">
    <h2 class="text-2xl text-indigo-200">Welcome Back</h2>

    <FormField name="email" placeholder="Email" type="email" :required="true" @update-value="(v) => (email = v)" />
    <FormField name="password" placeholder="Password" type="password" :required="true"
      @update-value="(v) => (password = v)" />

    <button type="submit"
      class="p-2 w-full bg-indigo-700 text-base font-medium rounded hover:shadow-sm hover:bg-indigo-700/50 hover:text-indigo-300 border border-indigo-500/50 hover:border-indigo-500"
      @click="async () => { await login() }">
      Login
    </button>
  </form>
</template>

<style lang="scss" scoped></style>