import {RouteRecordRaw} from "vue-router";

export const baseRoutes: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/index.vue"),
        meta: {title: "登录"},
    }
];
