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
    // config: {
    //   brand: {
    //     primary: "#dfff0f",
    //     secondary: "#26A69A",
    //     accent: "#9C27B0",
    //     positive: "#21BA45",
    //     negative: "#C10015",
    //     info: "#31CCEC",
    //     warning: "#F2C037",
    //   },
    // },
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
  css: ["~/assets/scss/main.scss"],
});
