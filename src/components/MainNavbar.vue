<script lang="ts" setup>
import router from '@/router';
import { useAuth } from '@/stores/auth';
import { useUI } from '@/stores/ui';

import { Icon } from "@iconify/vue";

const auth = useAuth();
const ui = useUI();

const logout = () => {
  auth.logout();
  router.replace({ name: 'auth' })
}

</script>

<template>
  <div class="w-full h-8 bg-indigo-500 "></div>
  <nav
    class="w-full h-8 fixed top-0 bg-indigo-500/50 backdrop-blur shadow shadow-slate-900/50 flex flex-row items-center justify-between px-4">
    <div class="left-side">
      <button class="w-8 h-8 text-slate-100 text-lg" @click="ui.toggleSidebar">
        <Icon v-if="!ui.sidebarOpen" icon="line-md:close-to-menu-alt-transition" />
        <Icon v-if="ui.sidebarOpen" icon="line-md:menu-to-close-alt-transition" />
      </button>
    </div>
    <div class="right-side">
      <button @click="logout">Logout</button>
    </div>

  </nav>
</template>

<style lang="scss" scoped></style>