<!-- <script setup lang="ts">
import { useI18n } from "vue-i18n";
import { languages } from "~/utils/languages";

const { locale } = useI18n();
const mode = ref<boolean>(true);

const changeLocale = (language: string) => {
  locale.value = language;
};
</script>
<template>
  <QToolbar class="c-bg-dark-two">
    <QToolbarTitle class="c-text-dark">
      {{ $t("hello") }}Carlos Davi ! locale {{ locale }}
    </QToolbarTitle>
    <q-btn-dropdown :label="locale" flat>
      <q-list>
        <q-item
          v-for="(language, index) in languages"
          :key="index"
          v-close-popup
          clickable
          dense
          @click="changeLocale(language)"
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
</template> -->
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { languages } from "~/utils/languages";

// Obtenha o i18n global do Nuxt
const { locale, t } = useI18n(); // Inclua `t` aqui para usar no template
const mode = ref<boolean>(true);

// Função para alterar o idioma
const changeLocale = (language: string) => {
  locale.value = language;
};
</script>

<template>
  <QToolbar class="c-bg-dark-two">
    <QToolbarTitle class="c-text-dark">
      {{ t("hello") }} Carlos Davi ! locale {{ locale }}
    </QToolbarTitle>
    <q-btn-dropdown :label="locale" flat>
      <q-list>
        <q-item
          v-for="(language, index) in languages"
          :key="index"
          v-close-popup
          clickable
          dense
          @click="changeLocale(language)"
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
