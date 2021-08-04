import { createApp } from "vue";

import App from "./App.vue";

import router from "@/router";

import store from "@/store";

import ElementPlus from "element-plus";

import "element-plus/lib/theme-chalk/index.css"

import lang from "element-plus/lib/locale/lang/zh-cn";

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus, { size: "small", locale: lang })
  .mount("#app");
