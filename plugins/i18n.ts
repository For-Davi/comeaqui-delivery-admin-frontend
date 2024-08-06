import { createI18n } from "vue-i18n";
import messages from "~/i18n";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "pt-BR",
    messages: messages,
  });

  vueApp.use(i18n);
});
