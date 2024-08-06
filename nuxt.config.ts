export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-quasar-ui",
    "@nuxt/icon",
    "@nuxt/eslint",
  ],
  css: ["~/assets/scss/main.scss"],
  components: [
    {
      path: "~/components",
      extensions: ["vue"],
      pathPrefix: false,
    },
  ],
  compatibilityDate: "2024-08-06",
  plugins: ["~/plugins/i18n.ts"],
});
