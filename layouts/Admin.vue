<script setup lang="ts">
import type { ItemsDrawerAdmin } from "~/typescript/interfaces/data/ItemsDrawer";
import { useI18n } from "vue-i18n";

const $q = useQuasar();
const { t } = useI18n();
const route = useRoute();
const drawer = ref<boolean>(true);
const menu = computed<Array<ItemsDrawerAdmin>>(() => [
  {
    srcLight: "/icons/dashboard-light.png",
    srcDark: "/icons/dashboard-dark.png",
    label: "Dashboard",
    separator: false,
    to: "/dashboard",
  },
  {
    srcLight: "/icons/pedidos-light.png",
    srcDark: "/icons/pedidos-dark.png",
    label: t("assideOptions.demand"),
    separator: false,
    to: "/pedidos",
  },
  {
    srcLight: "/icons/produtos-light.png",
    srcDark: "/icons/produtos-dark.png",
    label: t("assideOptions.products"),
    separator: false,
    to: "/produtos",
  },
  {
    srcLight: "/icons/historico-light.png",
    srcDark: "/icons/historico-dark.png",
    label: t("assideOptions.history"),
    separator: false,
    to: "/historico",
  },
  {
    srcLight: "/icons/webapp-light.png",
    srcDark: "/icons/webapp-dark.png",
    label: t("assideOptions.webAppSales"),
    separator: false,
    to: "/webApp",
  },
  {
    srcLight: "/icons/promocoes-light.png",
    srcDark: "/icons/promocoes-dark.png",
    label: t("assideOptions.promotions"),
    separator: false,
    to: "/promocoes",
  },
  {
    srcLight: "/icons/time-light.png",
    srcDark: "/icons/time-dark.png",
    label: t("assideOptions.collaborators"),
    separator: false,
    to: "/colaboradores",
  },
  {
    srcLight: "/icons/metas-light.png",
    srcDark: "/icons/metas-dark.png",
    label: t("assideOptions.goals"),
    separator: false,
    to: "/metas",
  },
  {
    srcLight: "/icons/carteira-light.png",
    srcDark: "/icons/carteira-dark.png",
    label: t("assideOptions.wallet"),
    separator: false,
    to: "/carteira",
  },
  {
    srcLight: "/icons/agenda-light.png",
    srcDark: "/icons/agenda-dark.png",
    label: t("assideOptions.schedule"),
    separator: false,
    to: "/agenda",
  },
  {
    srcLight: "/icons/atualizacoes-light.png",
    srcDark: "/icons/atualizacoes-dark.png",
    label: t("assideOptions.updates"),
    separator: true,
    to: "/atualizacoes",
  },
  {
    srcLight: "/icons/notificacoes-light.png",
    srcDark: "/icons/notificacoes-dark.png",
    label: t("assideOptions.notifications"),
    separator: false,
    to: "/notificacoes",
  },
]);

const isActive = (item: string) => {
  return route.path === item;
};
const getClass = (itemTo: string) => {
  const isActiveRoute = itemTo === route.path;
  if (isActiveRoute) {
    return $q.dark.isActive ? "c-text-light" : "c-text-dark";
  } else {
    return $q.dark.isActive ? "c-text-light" : "c-text-dark";
  }
};
</script>
<template>
  <QLayout view="lHh LpR lFf">
    <QHeader class="bg-primary text-white">
      <Navbar />
    </QHeader>
    <QDrawer
      v-model="drawer"
      show-if-above
      :width="280"
      :breakpoint="500"
      :class="$q.dark.isActive ? 'c-bg-light-one' : 'c-bg-dark-one'"
      elevated
    >
      <QScrollArea class="fit">
        <QImg
          :src="
            $q.dark.isActive
              ? '/images/logo-comeaqui-light.png'
              : '/images/logo-comeaqui-dark.png'
          "
          height="90px"
          class="full-width"
        />
        <QList class="row justify-center">
          <QItem
            v-for="(item, index) in menu"
            :key="index"
            v-ripple
            dense
            clickable
            :to="item.to"
            :active="isActive(item.to)"
            :active-class="$q.dark.isActive ? 'c-bg-light-two' : 'c-bg-details'"
            class="selected-item-menu-dark q-py-sm text-bold"
          >
            <QItemSection avatar>
              <QImg
                :src="$q.dark.isActive ? item.srcLight : item.srcDark"
                width="30px"
              />
            </QItemSection>
            <QItemSection :class="getClass(item.to)">
              {{ item.label }}
            </QItemSection>
          </QItem>
        </QList>
      </QScrollArea>
    </QDrawer>
    <QPageContainer
      :class="$q.dark.isActive ? 'c-bg-light-one' : 'c-bg-dark-one'"
    >
      <slot />
    </QPageContainer>
  </QLayout>
</template>
