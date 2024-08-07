<script setup lang="ts">
import type { ICardDashboard } from "~/typescript/interfaces/data/CardDashboard";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
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
  </div>
</template>
