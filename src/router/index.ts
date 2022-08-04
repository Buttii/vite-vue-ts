import { createRouter, createWebHistory } from "vue-router";

import { baseRoutes } from "./base"



const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes
})

export default router
