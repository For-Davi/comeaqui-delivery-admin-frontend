// plugins/i18n.js
import { defineNuxtPlugin } from "#app";
import { createI18n } from "vue-i18n";
import messagesI18n from "~/i18n";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    locale: "pt-BR",
    legacy: false,
    messages: messagesI18n,
  });

  // Adicione o i18n ao contexto global do Nuxt
  nuxtApp.vueApp.use(i18n);
});
