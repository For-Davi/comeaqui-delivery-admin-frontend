<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts";

const layout = ref<LayoutKey>("admin");
// ATIVAR QUANDO O SITE FOR PARA O AR
// useHead({
//   title: "My App",
//   meta: [{ name: "description", content: "My amazing site." }],
//   bodyAttrs: {
//     class: "test",
//   },
//   script: [{ innerHTML: "console.log('Hello world')" }],
// });
// useHead({
//   titleTemplate: (titleChunk) => {
//     return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
//   }
// })

// ATIVAR QUANDO O SITE FOR PARA O AR
// useSeoMeta({
//   title: "My Amazing Site",
//   ogTitle: "My Amazing Site",
//   description: "This is my amazing site, let me tell you all about it.",
//   ogDescription: "This is my amazing site, let me tell you all about it.",
//   ogImage: "https://example.com/image.png",
//   twitterCard: "summary_large_image",
// });
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
