import {createApp} from "vue";

import App from "./App.vue";

import router from "./router";

import {createPinia} from "pinia"

import piniaPlugin from "@/store/plugin";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(createPinia().use(piniaPlugin))
    .mount("#app");
