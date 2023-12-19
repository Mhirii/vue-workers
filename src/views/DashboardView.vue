<script lang="ts" setup>
import { useAuth } from '@/stores/auth';

const auth = useAuth()
</script>

<template>
  <div>
    this is the dashboard
    <div>{{ auth.username }}</div>
  </div>
</template>

<style lang="scss" scoped></style>