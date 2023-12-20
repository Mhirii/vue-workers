<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="w-full max-h-12 bg-slate-transparent border border-slate-700/50 rounded h-12 flex flex-row justify-start items-center gap-2 p-2 hover:bg-indigo-700/25 hover:border-indigo-500/50">
    <button class="w-6 h-6  bg-slate-transparent border border-slate-600/50 rounded-full flex justify-center items-center"
      :class="task.isDone ? 'hover:bg-red-700/25 hover:border-red-500/50 hover:text-red-400' : ''">
      <Icon v-if="task.isDone" icon="carbon:checkmark" />
    </button>
    <div>
      {{ task.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>