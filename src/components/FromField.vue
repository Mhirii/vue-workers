<script lang="ts" setup>
import { ref } from "vue"
defineProps(['type', 'placeholder', 'name', 'required'])
const value = ref('')
</script>

<template>
  <div class="form-field">
    <label :for="name"> {{ name }} </label>
    <input v-model="value" :type="type" :placeholder="placeholder" :name="name" :required="required"
      @input="$emit('update-value', value)" />
  </div>
</template>

<style lang="scss" scoped>
.form-field {
  @apply flex flex-col items-start;

  label {
    @apply text-base capitalize text-slate-200/50
  }

  input {
    @apply bg-slate-800 px-2 py-1 rounded focus:bg-indigo-700/25 focus:outline-none focus:shadow hover:bg-slate-800/75 border border-slate-700/70 focus:border-indigo-500
  }
}
</style>