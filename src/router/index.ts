import { createRouter, createWebHistory } from "vue-router";

import { baseRoutes } from "./base"
import {asyncRoutes} from "@/router/async";



const router = createRouter({
  history: createWebHistory(),
  routes: [
      ...baseRoutes,
      ...asyncRoutes
  ]
})

export default router
