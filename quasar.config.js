import { defineConfig } from "quasar";

export default defineConfig({
  app: {
    name: "Comeaqui",
    description: "Comeaqui config Quasar",
    icons: [],
  },
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
    plugins: ["Dialog", "Notify"],
    components: ["QLayout", "QHeader", "QFooter", "QPageContainer", "QPage"],
    directives: ["Ripple"],
    iconSet: "material-icons",
    cssAddon: true,
  },
  animations: "all",
  build: {
    vueRouterMode: "history",
    extendWebpack(cfg) {},
    showProgress: true,
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
  css: ["app.sass"],
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {},
    manifest: {
      name: "My Quasar App",
      short_name: "QuasarApp",
      description: "A Quasar Framework app",
      display: "standalone",
      start_url: "/",
      theme_color: "#027be3",
      background_color: "#ffffff",
    },
  },
  electron: {
    bundler: "packager",
    packager: {},
    builder: {},
  },
  capacitor: {
    hideSplashscreen: true,
  },
  cordova: {},
});
