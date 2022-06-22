import {createApp} from "vue";

import App from "./App.vue";

import router from "./router";

import {createPinia} from "pinia"

import piniaPlugin from "@/store/plugin";

createApp(App)
    .use(router)
    .use(createPinia().use(piniaPlugin))
    .mount("#app");
