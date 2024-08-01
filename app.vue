<script setup lang="ts">
const multiply = (a: number, b) => a * b;
const    x = () => {};
function teste() {
  console.log(teste);
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout :name="teste">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
