<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { ItemsDrawerUser } from "~/typescript/interfaces/data/ItemsDrawer";
import { languages } from "~/utils/languages";

const { locale, t } = useI18n();
const mode = ref<boolean>(true);
const optionsUser = computed<Array<ItemsDrawerUser>>(() => [
  {
    src: "/icons/configuracoes-dark.png",
    label: t("optionsUser.settings"),
    value: "settings",
  },
  {
    src: "/icons/logout.png",
    label: t("optionsUser.logout"),
    value: "logout",
  },
]);

const changeLocale = (language: string) => {
  locale.value = language;
};
const selectedOption = (value: string) => {
  console.log("value", value);
};
</script>

<template>
  <QToolbar class="c-bg-dark-two">
    <QToolbarTitle class="c-text-dark">
      {{ t("hello") }} Carlos Davi
    </QToolbarTitle>
    <QBtnDropdown :label="locale" flat>
      <QList>
        <QItem
          v-for="(language, index) in languages"
          :key="index"
          v-close-popup
          clickable
          dense
          @click="changeLocale(language)"
        >
          <QItemSection>
            <QItemLabel>{{ language }}</QItemLabel>
          </QItemSection>
        </QItem>
      </QList>
    </QBtnDropdown>
    <QToggle
      v-model="mode"
      :class="mode ? 'c-text-light ' : 'c-text-dark  '"
      unchecked-icon="dark_mode"
      checked-icon="light_mode"
      size="lg"
      color="orange-10"
      class="q-mr-md"
    />
    <QBtnDropdown rounded flat class="q-pa-none q-ml-sm">
      <template #label>
        <div class="row items-center no-wrap q-pa-none">
          <QAvatar>
            <QImg size="sm" src="/images/user.png" />
          </QAvatar>
        </div>
      </template>
      <QList>
        <QItem
          v-for="(item, index) in optionsUser"
          :key="index"
          clickable
          @click="selectedOption(item.value)"
        >
          <QItemSection avatar>
            <QImg :src="item.src" width="30px" />
          </QItemSection>
          <QItemSection>{{ item.label }}</QItemSection>
        </QItem>
      </QList>
    </QBtnDropdown>
  </QToolbar>
</template>
