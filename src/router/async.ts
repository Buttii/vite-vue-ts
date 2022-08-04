import {RouteRecordRaw} from "vue-router";

import Layout from "@/layout/index.vue"
import CommonViewer from "@/layout/CommonViewer.vue";

export const asyncRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "",
                name: "index",
                component: () => import("@/views/home/index.vue"),
                meta: {
                    title: "首页",
                    navBar: true,
                    cache: true
                }
            },
            {
                path: "list",
                component: CommonViewer,
                meta: {title: "列表管理", navBar: true},
                children: [
                    {
                        path: "",
                        name: "list",
                        component: () => import("@/views/list/index.vue"),
                        meta: {title: "列表", navBar: true, cache: true}
                    },
                    {
                        path: "add",
                        name: "listAdd",
                        component: () => import("@/views/list/add.vue"),
                        meta: {title: "新增", navBar: true}
                    },
                    {
                        path: "detail",
                        name: "listDetail",
                        component: () => import("@/views/list/detail.vue"),
                        meta: {title: "详情"}
                    }
                ]
            }
        ]
    }
]
