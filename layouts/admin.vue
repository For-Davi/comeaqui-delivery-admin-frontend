<script setup lang="ts">
import type { ItemsDrawerAdmin } from "~/typescript/interfaces/data/ItemsDrawer";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();
const drawer = ref<boolean>(true);
const menu = computed<Array<ItemsDrawerAdmin>>(() => [
  {
    src: "/icons/dashboard.png",
    label: "Dashboard",
    separator: false,
    to: "/dashboard",
  },
  {
    src: "/icons/pedidos.png",
    label: t("assideOptions.demand"),
    separator: false,
    to: "/pedidos",
  },
  {
    src: "/icons/produtos.png",
    label: t("assideOptions.products"),
    separator: false,
    to: "/produtos",
  },
  {
    src: "/icons/historico.png",
    label: t("assideOptions.history"),
    separator: false,
    to: "/historico",
  },
  {
    src: "/icons/webApp.png",
    label: t("assideOptions.webAppSales"),
    separator: false,
    to: "/webApp",
  },
  {
    src: "/icons/promocoes.png",
    label: t("assideOptions.promotions"),
    separator: false,
    to: "/promocoes",
  },
  {
    src: "/icons/time.png",
    label: t("assideOptions.collaborators"),
    separator: false,
    to: "/colaboradores",
  },
  {
    src: "/icons/metas.png",
    label: t("assideOptions.goals"),
    separator: false,
    to: "/metas",
  },
  {
    src: "/icons/carteira.png",
    label: t("assideOptions.wallet"),
    separator: false,
    to: "/carteira",
  },
  {
    src: "/icons/agenda.png",
    label: t("assideOptions.schedule"),
    separator: false,
    to: "/agenda",
  },
  {
    src: "/icons/atualizacoes.png",
    label: t("assideOptions.updates"),
    separator: true,
    to: "/atualizacoes",
  },
  {
    src: "/icons/notificacoes.png",
    label: t("assideOptions.notifications"),
    separator: false,
    to: "/notificacoes",
  },
]);

const isActive = (item: string) => {
  return route.path === item;
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
      :class="$q.dark.isActive ? 'c-bg-dark-one' : 'c-bg-dark-one'"
      elevated
    >
      <QScrollArea class="fit">
        <QImg src="/images/logo-dark.png" height="90px" class="full-width" />
        <QList class="row justify-center">
          <QItem
            v-for="(item, index) in menu"
            :key="index"
            v-ripple
            dense
            clickable
            :to="item.to"
            :active="isActive(item.to)"
            active-class="c-bg-dark-two c-text-light"
            class="selected-item-menu-dark q-py-sm"
          >
            <QItemSection avatar>
              <QImg :src="item.src" width="30px" />
            </QItemSection>
            <QItemSection class="c-text-dark">
              {{ item.label }}
            </QItemSection>
          </QItem>
        </QList>
      </QScrollArea>
    </QDrawer>
    <QPageContainer class="c-bg-dark-one">
      <slot />
    </QPageContainer>
  </QLayout>
</template>
