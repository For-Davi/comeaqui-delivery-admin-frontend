import { defineConfig } from "quasar";

export default defineConfig({
  app: {
    name: "Comeaqui",
    description: "Comeaqui config Quasar",
    icons: [],
  },
  boot: ["i18n"],
  extras: [
    "material-icons",
    "mdi-v7",
    "ionicons-v4",
    "eva-icons",
    "fontawesome-v6",
    "themify",
    "line-awesome",
    "bootstrap-icons",
  ],
  framework: {
    plugins: [
      "Dialog",
      "Notify",
      "Loading",
      "LocalStorage",
      "SessionStorage",
      "Cookies",
      "Meta",
    ],
    components: ["QLayout", "QHeader", "QFooter", "QPageContainer", "QPage"],
    directives: ["Ripple"],
    iconSet: "material-icons",
    cssAddon: true,
    autoImportComponentCase: "pascal",
    config: {
      brand: {
        primary: "ff007f",
      },
    },
  },
  animations: "all",
  build: {
    vueRouterMode: "history",
    extendWebpack() {},
    showProgress: true,
    loaders: {
      scss: {
        additionalData: `@import "@/assets/scss/quasar.variables.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  css: ["~/assets/scss/quasar.variables.scss"],
});
