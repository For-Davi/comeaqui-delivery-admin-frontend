<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { ItemsDrawerUser } from "~/typescript/interfaces/data/ItemsDrawer";
import { languages } from "~/utils/languages";

const $q = useQuasar();
const { locale, t } = useI18n();
const mode = ref<boolean>(true);
const optionsUser = computed<Array<ItemsDrawerUser>>(() => [
  {
    srcLight: "/icons/configuracoes-light.png",
    srcDark: "/icons/configuracoes-dark.png",
    label: t("optionsUser.settings"),
    value: "settings",
  },
  {
    srcLight: "/icons/logout-light.png",
    srcDark: "/icons/logout-dark.png",
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

watch(
  mode,
  () => {
    $q.dark.set(mode.value);
  },
  { immediate: true },
);
</script>

<template>
  <QToolbar :class="$q.dark.isActive ? 'c-bg-light-two' : 'c-bg-dark-two'">
    <QToolbarTitle
      :class="$q.dark.isActive ? 'c-text-light' : 'c-text-dark'"
      class="text-bold"
    >
      {{ t("hello") }}, Carlos Davi !
    </QToolbarTitle>
    <QBtnDropdown
      :label="locale"
      flat
      :class="$q.dark.isActive ? 'c-text-light ' : 'c-text-dark'"
    >
      <QList>
        <QItem
          v-for="(language, index) in languages"
          :key="index"
          v-close-popup
          clickable
          dense
          :class="
            $q.dark.isActive
              ? 'c-text-light c-bg-light-two'
              : 'c-text-dark c-bg-dark-two'
          "
          @click="changeLocale(language)"
        >
          <QItemSection>
            <QItemLabel class="text-weight-medium">{{ language }}</QItemLabel>
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
    <QBtnDropdown
      rounded
      flat
      class="q-pa-none q-ml-sm"
      :class="$q.dark.isActive ? 'c-text-light' : 'c-bg-details c-text-dark'"
    >
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
          :class="
            $q.dark.isActive
              ? 'c-text-light c-bg-light-two'
              : 'c-text-dark c-bg-dark-two'
          "
          @click="selectedOption(item.value)"
        >
          <QItemSection avatar>
            <QImg
              :src="$q.dark.isActive ? item.srcLight : item.srcDark"
              width="30px"
            />
          </QItemSection>
          <QItemSection class="text-bold">{{ item.label }}</QItemSection>
        </QItem>
      </QList>
    </QBtnDropdown>
  </QToolbar>
</template>
