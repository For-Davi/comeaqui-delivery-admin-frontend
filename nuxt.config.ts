export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: true,
  },
  css: ["~/assets/scss/main.scss"],
  components: [
    {
      path: "~/components",
      extensions: ["vue"],
      pathPrefix: false,
    },
  ],
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-quasar-ui",
    "@nuxt/icon",
    "@nuxt/eslint",
  ],
});
