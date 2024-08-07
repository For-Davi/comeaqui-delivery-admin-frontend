<script setup lang="ts">
import { useHexToRgba } from "~/composables/useHexToRgba";

const props = defineProps<{
  src: string;
  title: string;
  valueTitle: string | number;
  subtitle: string;
  valueSubtitle: string | number;
  width: string;
  classColor: string;
}>();

const { hexToRgba } = useHexToRgba();
const $q = useQuasar();

const containerStyles = computed(() => {
  return {
    overflow: "hidden",
  };
});
const dynamicStyles = computed(() => {
  const rgbaColor = hexToRgba(props.classColor, 1);

  return {
    "border-radius": "50%",
    width: "60px",
    height: "0px",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "box-shadow": `0 0 50px 30px ${rgbaColor}`,
    "background-color": rgbaColor,
  };
});
const imageStyles = computed(() => ({
  width: "60px",
  height: "auto",
}));
</script>

<template>
  <q-card
    :class="$q.dark.isActive ? 'card-dashboard-light' : 'card-dashboard-dark'"
    flat
    :style="{ width: props.width }"
  >
    <q-card-section
      class="row justify-around items-center q-pa-none"
      :style="containerStyles"
    >
      <div :style="dynamicStyles">
        <q-img fit="contain" :style="imageStyles" :src="props.src" />
      </div>
      <q-card-section class="text column justify-between">
        <div class="q-mb-sm">
          <div class="title">
            {{ title }}
          </div>
          <div class="value-title">
            {{ valueTitle }}
          </div>
        </div>
        <div class="q-mt-sm">
          <div class="subtitle">
            {{ subtitle }}
          </div>
          <div class="value-subtitle">
            {{ valueSubtitle }}
          </div>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
