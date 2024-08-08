<script setup lang="ts">
import type { ICardDashboard } from "~/typescript/interfaces/data/CardDashboard";
import { useI18n } from "vue-i18n";
import type { OrderProductsTable } from "~/typescript/interfaces/data/Table";
import type { IPagination } from "~/typescript/interfaces/data/Pagination";

const { t } = useI18n();
const $q = useQuasar();

const searchOrderProduct = ref<string>("");
const pagination = ref<IPagination>({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 5,
});
const columnsProduct = computed<Array<OrderProductsTable>>(() => [
  {
    name: "position",
    align: "center",
    label: t("tableOrderProcuts.position"),
    field: "position",
  },
  {
    name: "name",
    align: "center",
    label: t("name"),
    field: "name",
  },
  {
    name: "category",
    align: "center",
    label: t("category"),
    field: "category",
  },
  {
    name: "quantity",
    align: "center",
    label: t("quantity"),
    field: "quantity",
  },
  {
    name: "invoicing",
    align: "left",
    label: t("invoicing"),
    field: "invoicing",
  },
  {
    name: "action",
    align: "center",
    label: t("action"),
    field: "action",
  },
]);
const rowProducts = reactive<Array<unknown>>([
  {
    id: "1564654",
    position: 1,
    name: "Coca-cola",
    quantity: 230,
    invoicing: "R$ 320,00",
    category: "Bebidas",
  },
  {
    id: "15646526",
    position: 2,
    name: "X-tudo",
    quantity: 198,
    invoicing: "R$ 640,00",
    category: "Lanches",
  },
  {
    id: "157474",
    position: 3,
    name: "Pudim",
    quantity: 195,
    invoicing: "R$ 360,00",
    category: "Sobremesas",
  },
  {
    id: "1564654",
    position: 1,
    name: "Coca-cola",
    quantity: 230,
    invoicing: "R$ 320,00",
    category: "Bebidas",
  },
  {
    id: "15646526",
    position: 2,
    name: "X-tudo",
    quantity: 198,
    invoicing: "R$ 640,00",
    category: "Lanches",
  },
  {
    id: "157474",
    position: 3,
    name: "Pudim",
    quantity: 195,
    invoicing: "R$ 360,00",
    category: "Sobremesas",
  },
  {
    id: "1564654",
    position: 1,
    name: "Coca-cola",
    quantity: 230,
    invoicing: "R$ 320,00",
    category: "Bebidas",
  },
  {
    id: "15646526",
    position: 2,
    name: "X-tudo",
    quantity: 198,
    invoicing: "R$ 640,00",
    category: "Lanches",
  },
  {
    id: "157474",
    position: 3,
    name: "Pudim",
    quantity: 195,
    invoicing: "R$ 360,00",
    category: "Sobremesas",
  },
  {
    id: "1564654",
    position: 1,
    name: "Coca-cola",
    quantity: 230,
    invoicing: "R$ 320,00",
    category: "Bebidas",
  },
  {
    id: "15646526",
    position: 2,
    name: "X-tudo",
    quantity: 198,
    invoicing: "R$ 640,00",
    category: "Lanches",
  },
  {
    id: "157474",
    position: 3,
    name: "Pudim",
    quantity: 195,
    invoicing: "R$ 360,00",
    category: "Sobremesas",
  },
  {
    id: "98414",
    position: 4,
    name: "Batata-frita",
    quantity: 190,
    invoicing: "R$ 320,00",
    category: "Acompanhamentos",
  },
  {
    id: "1657103",
    position: 5,
    name: "Onion-rings",
    quantity: 190,
    invoicing: "R$ 300,00",
    category: "Acompanhamentos",
  },
  {
    id: "15600004",
    position: 6,
    name: "Sorvete",
    quantity: 150,
    invoicing: "R$ 250,00",
    category: "Sobremesas",
  },
  {
    id: "98414",
    position: 4,
    name: "Batata-frita",
    quantity: 190,
    invoicing: "R$ 320,00",
    category: "Acompanhamentos",
  },
  {
    id: "1657103",
    position: 5,
    name: "Onion-rings",
    quantity: 190,
    invoicing: "R$ 300,00",
    category: "Acompanhamentos",
  },
  {
    id: "15600004",
    position: 6,
    name: "Sorvete",
    quantity: 150,
    invoicing: "R$ 250,00",
    category: "Sobremesas",
  },
  {
    id: "98414",
    position: 4,
    name: "Batata-frita",
    quantity: 190,
    invoicing: "R$ 320,00",
    category: "Acompanhamentos",
  },
  {
    id: "1657103",
    position: 5,
    name: "Onion-rings",
    quantity: 190,
    invoicing: "R$ 300,00",
    category: "Acompanhamentos",
  },
  {
    id: "15600004",
    position: 6,
    name: "Sorvete",
    quantity: 150,
    invoicing: "R$ 250,00",
    category: "Sobremesas",
  },
  {
    id: "98414",
    position: 4,
    name: "Batata-frita",
    quantity: 190,
    invoicing: "R$ 320,00",
    category: "Acompanhamentos",
  },
  {
    id: "1657103",
    position: 5,
    name: "Onion-rings",
    quantity: 190,
    invoicing: "R$ 300,00",
    category: "Acompanhamentos",
  },
  {
    id: "15600004",
    position: 6,
    name: "Sorvete",
    quantity: 150,
    invoicing: "R$ 250,00",
    category: "Sobremesas",
  },
  {
    id: "98414",
    position: 4,
    name: "Batata-frita",
    quantity: 190,
    invoicing: "R$ 320,00",
    category: "Acompanhamentos",
  },
  {
    id: "1657103",
    position: 5,
    name: "Onion-rings",
    quantity: 190,
    invoicing: "R$ 300,00",
    category: "Acompanhamentos",
  },
  {
    id: "15600004",
    position: 6,
    name: "Sorvete",
    quantity: 150,
    invoicing: "R$ 250,00",
    category: "Sobremesas",
  },
  {
    id: "98414",
    position: 4,
    name: "Batata-frita",
    quantity: 190,
    invoicing: "R$ 320,00",
    category: "Acompanhamentos",
  },
  {
    id: "1657103",
    position: 5,
    name: "Onion-rings",
    quantity: 190,
    invoicing: "R$ 300,00",
    category: "Acompanhamentos",
  },
  {
    id: "15600004",
    position: 6,
    name: "Sorvete",
    quantity: 150,
    invoicing: "R$ 250,00",
    category: "Sobremesas",
  },
]);

const cardsDashboard = computed<Array<ICardDashboard>>(() => [
  {
    src: "/images/dinheiro.png",
    title: t("dashboard.invoicing"),
    valueTitle: "R$ 1820,30",
    subtitle: t("dashboard.pending"),
    valueSubtitle: "R$ 220,30",
    width: "24%",
    classColor: "#39b027",
  },
  {
    src: "/images/check.png",
    title: t("dashboard.finished"),
    valueTitle: `15 ${t("dashboard.demand")}`,
    subtitle: t("dashboard.progress"),
    valueSubtitle: `6 ${t("dashboard.demand")}`,
    width: "24%",
    classColor: "#b4af3a",
  },
  {
    src: "/images/ticket.png",
    title: t("dashboard.ticketAverage"),
    valueTitle: `R$ 102,32`,
    subtitle: t("dashboard.pending"),
    valueSubtitle: "R$ 220,30",
    width: "24%",
    classColor: "#2797b0",
  },
  {
    src: "/images/satisfacao.png",
    title: t("dashboard.assessment"),
    valueTitle: `9,7`,
    subtitle: t("dashboard.lowestGrade"),
    valueSubtitle: "4,1",
    width: "24%",
    classColor: "#5221b5",
  },
]);
const pagesNumber = computed(() => {
  return Math.ceil(rowProducts.length / pagination.value.rowsPerPage);
});
</script>

<template>
  <div class="render-content">
    <div class="row justify-between q-gutter-sm q-pa-md">
      <CardDashboard
        v-for="(item, index) in cardsDashboard"
        :key="index"
        :src="item.src"
        :title="item.title"
        :value-title="item.valueTitle"
        :subtitle="item.subtitle"
        :value-subtitle="item.valueSubtitle"
        :width="item.width"
        :class-color="item.classColor"
      />
    </div>
    <div class="row justify-center q-px-md">
      <QTable
        v-model:pagination="pagination"
        hide-pagination
        class="full-width text-bold"
        :class="$q.dark.isActive ? 'table-light' : 'table-dark'"
        :filter="searchOrderProduct"
        flat
        dense
        bordered
        :rows="rowProducts"
        :no-data-label="t('notResults')"
        :columns="columnsProduct"
        row-key="id"
      >
        <template #top>
          <div class="text-h6">
            {{ t("tableOrderProcuts.title") }}
          </div>
          <q-space />
          <q-input
            v-model="searchOrderProduct"
            borderless
            dense
            standout
            :label-color="$q.dark.isActive ? 'black' : 'white'"
            :label="t('search')"
            :class="
              $q.dark.isActive
                ? 'c-bg-light-two q-px-sm'
                : 'c-bg-dark-two q-px-sm'
            "
            :input-class="$q.dark.isActive ? 'text-black' : 'text-white'"
          >
            <template #append>
              <q-icon
                name="search"
                :color="$q.dark.isActive ? 'grey' : 'white'"
              />
            </template>
          </q-input>
        </template>
        <template #body="props">
          <QTr>
            <QTd key="position" :props="props" class="table-item">
              <div class="text-center">
                {{ props.row.position }}
              </div>
            </QTd>
            <QTd key="name" :props="props" class="table-item">
              <div class="text-center">
                {{ props.row.name }}
              </div>
            </QTd>
            <QTd key="category" :props="props" class="table-item">
              <div class="text-center">
                {{ props.row.category }}
              </div>
            </QTd>
            <QTd key="quantity" :props="props" class="table-item">
              <div class="text-center">
                {{ props.row.quantity }}
              </div>
            </QTd>
            <QTd key="invoicing" :props="props" class="table-item">
              <div class="text-left">
                {{ props.row.invoicing }}
              </div>
            </QTd>
            <QTd key="action" :props="props" class="table-item">
              <q-btn size="sm" flat icon="visibility" class="icon-eye" round />
            </QTd>
          </QTr>
        </template>
      </QTable>
      <div class="row justify-center q-mt-sm">
        <QPagination
          v-model="pagination.page"
          :max="pagesNumber"
          :max-pages="5"
          direction-links
          flat
          color="grey"
          active-design="unelevated"
          :active-color="$q.dark.isActive ? 'grey' : 'orange'"
        />
      </div>
    </div>
  </div>
</template>
