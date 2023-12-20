
<script lang="ts" setup>
import TaskCard from './TaskCard.vue'
const props = defineProps({
  board: { type: Object, required: true }
})

const tasks = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    tags: ['tag1', 'tag2'],
    dueDate: '2022-01-01',
    priority: 1,
    isDone: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    tags: ['tag1', 'tag2'],
    dueDate: '2022-01-01',
    priority: 2,
    isDone: true,
  }
]

</script>

<template>
  <div :id="props.board.id"
    class="board bg-slate-800/50 border border-indigo-600/20 rounded p-2 h-fit min-w-fit max-w-sm w-full flex flex-col flex-grow flex-shrink flex-wrap items-center gap-2">
    <div class="py-2">{{ props.board.name }}</div>
    <div class="separator"></div>
    <div class="task-card w-full" v-for="task in tasks" v-bind:key="task.id">
      <TaskCard :task="task" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.separator {
  @apply w-full h-px bg-slate-700/50
}

.board {
  min-width: 12rem;
  max-width: 16rem;
}
</style>