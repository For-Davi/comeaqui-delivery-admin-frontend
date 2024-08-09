<template>
  <q-page class="q-px-md">
    <div class="row text-h6 full-height q-py-sm">
      <div class="col-8 flex items-center">
        <div class="q-mr-md">
          <q-btn
            flat
            outline
            no-caps
            rounded
            size="md"
            width="81px"
            height="35px"
            label="Todos"
            class="button-top"
          />
        </div>
        <div class="q-mr-md">
          <q-btn round unelevated>
            <QImg fit="none" sizes="32" :src="icone.delivery" />
          </q-btn>
        </div>
        <div class="q-mr-md">
          <QBtn round unelevated>
            <QImg fit="none" sizes="32" :src="icone.loja" />
          </QBtn>
        </div>
        <div :style="{ width: '300px' }"></div>
      </div>
      <div class="col-4 flex items-center justify-end">
        <div>
          <QBtn no-caps rounded unelevated class="button-add flex">
            <QIcon class="icon-add-order q-mr-sm" color="white" name="add" />
            <span>Adicionar Pedido</span>
          </QBtn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
interface Icone {
  loja: string;
  delivery: string;
}

const icone: Icone = {
  loja: "icons/loja.png",
  delivery: "icons/delivery.png",
};
</script>

<style lang="scss" scoped>
.button-top {
  color: #fff;
  border: 1px solid #3c3f46;
}
.button-add {
  height: 35px;
  color: #f9f9f9 !important;
  background: #3c3f46 !important;
  border: 1px solid #3c3f46;
}
.icon-add-order {
  width: 22px;
  height: 22px;
  font-size: 18px;
  border-radius: 50%;
  background: #39b027;
}
</style>
