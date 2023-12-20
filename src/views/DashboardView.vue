<script lang="ts" setup>
import MainNavbar from '@/components/MainNavbar.vue';
import TaskWorkspace from '@/components/TaskWorkspace.vue';
import type { Board } from '@/types';

const boards: Board[] = [
  {
    id: "1",
    name: 'To Do',
  },
  {
    id: "2",
    name: 'In Progress',
  },
  {
    id: "3",
    name: 'Done',
  }
]

</script>

<template>
  <MainNavbar />
  <TaskWorkspace :boards="boards">
  </TaskWorkspace>
</template>

<style lang="scss" scoped></style>