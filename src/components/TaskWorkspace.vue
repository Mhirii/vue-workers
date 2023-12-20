<script lang="ts" setup>
import TaskBoard from '@/components/TaskBoard.vue';
import { type Board } from '../types';

const props = defineProps({
  boards: Array<Board>,
})
</script>

<template>
  <main class="bg-slate-900 px-4 pt-4 flex flex-row gap-4 overflow-scroll">
    <TaskBoard v-for="board in props.boards" :key="board.id" :board="board" />
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: calc(100vh - 32px);
  min-width: 100vw;
}
</style>