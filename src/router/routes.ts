  import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/index.vue"),
    meta: { title: "首页" },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
    meta: { title: "登录" },
  },
];
