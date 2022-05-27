import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("../layouts/default"),
            name: "default",
            children: [
                {
                    path: "statistics",
                    name: "statistics",
                    component: () => import("../pages/statistics")
                },
                {
                    path: "menus",
                    name: "menus",
                    component: () => import("../pages/menus")
                }
            ]
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../layouts/login")
        }
    ]
})

export default router

