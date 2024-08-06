<script setup lang="ts">
import type { ItemsDrawerAdmin } from "~/typescript/interfaces/data/ItemsDrawer";

const route = useRoute();
const drawer = ref<boolean>(true);
const menu = reactive<Array<ItemsDrawerAdmin>>([
  {
    src: "/icons/dashboard.png",
    label: "Dashboard",
    separator: false,
    to: "/dashboard",
  },
  {
    src: "/icons/pedidos.png",
    label: "Pedidos",
    separator: false,
    to: "/pedidos",
  },
  {
    src: "/icons/produtos.png",
    label: "Produtos",
    separator: false,
    to: "/produtos",
  },
  {
    src: "/icons/historico.png",
    label: "Histórico",
    separator: false,
    to: "/historico",
  },
  {
    src: "/icons/webApp.png",
    label: "WebApp Vendas",
    separator: false,
    to: "/webApp",
  },
  {
    src: "/icons/promocoes.png",
    label: "Promoções",
    separator: false,
    to: "/promocoes",
  },
  {
    src: "/icons/time.png",
    label: "Colaboradores",
    separator: false,
    to: "/colaboradores",
  },
  {
    src: "/icons/metas.png",
    label: "Metas",
    separator: false,
    to: "/metas",
  },
  {
    src: "/icons/carteira.png",
    label: "Carteira",
    separator: false,
    to: "/carteira",
  },
  {
    src: "/icons/agenda.png",
    label: "Agenda",
    separator: false,
    to: "/agenda",
  },
  {
    src: "/icons/atualizacoes.png",
    label: "Atualizações",
    separator: true,
    to: "/atualizacoes",
  },
  {
    src: "/icons/notificacoes.png",
    label: "Notificações",
    separator: false,
    to: "/notificacoes",
  },
  {
    src: "/icons/configuracoes.png",
    label: "Configurações",
    separator: false,
    to: "/configuracoes",
  },
]);

const isActive = (item: string) => {
  return route.path == item;
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
    <!-- <QDrawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      :width="280"
      :breakpoint="500"
      :class="$q.dark.isActive ? 'c-bg-dark-one' : 'c-bg-dark-one'"
      elevated
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    > -->
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
              <q-img :src="item.src" width="30px" />
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
