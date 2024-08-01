<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts";

const layout = ref<LayoutKey>("super");
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
