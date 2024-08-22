import type { RouteRecordRaw } from 'vue-router'

export default (prefix: string) => ({
    path: prefix,
    children: [
        {
            path: '', component: () => import('./views/HomeView.vue'),
        },
        {
            path: 'about', component: () => import('./views/AboutView.vue'),
        }
    ]
}) as const satisfies RouteRecordRaw