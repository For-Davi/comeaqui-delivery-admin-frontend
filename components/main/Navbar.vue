<script setup lang="ts">
import { languages } from "~/utils/languages";

const mode = ref<boolean>(true);
const languageSelected = ref<string>("pt-BR");

const onItemClick = (language: string) => {
  languageSelected.value = language;
};
</script>
<template>
  <QToolbar class="c-bg-dark-two">
    <QToolbarTitle class="c-text-dark">Olá Carlos Davi !</QToolbarTitle>
    <q-btn-dropdown :label="languageSelected" flat>
      <q-list>
        <q-item
          v-for="(language, index) in languages"
          :key="index"
          v-close-popup
          clickable
          dense
          @click="onItemClick(language)"
        >
          <q-item-section>
            <q-item-label>{{ language }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <QToggle
      v-model="mode"
      :class="mode ? 'c-text-light ' : 'c-text-dark  '"
      unchecked-icon="dark_mode"
      checked-icon="light_mode"
      size="lg"
      color="orange-10"
      class="q-mr-md"
    />
    <QBtn flat round dense class="c-bg-secondary q-mr-md">
      <QAvatar color="primary" text-color="white">J</QAvatar>
    </QBtn>
  </QToolbar>
</template>
