import { createApp } from 'vue'

import App from './App.vue'

import router from "@/router"

import store from "@/store"

import { locale } from 'element-plus'

import lang from "element-plus/lib/locale/lang/zh-cn"

import {assignComponents} from "@/components/element-components"

locale(lang)

const app = createApp(App)

assignComponents(app)

app.config.globalProperties.$ELEMENT = {size: "small"}

app.use(router).use(store).mount('#app')
