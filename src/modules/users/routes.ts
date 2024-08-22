import type { RouteRecordRaw } from "vue-router";

export default (prefix: string) => ({
    path: prefix,
    children: [
        {
            path: '', component: () => import('./views/UserIndex.vue'),
        },
        {
            path: 'create', component: () => import('./views/UserCreate.vue'),
        },
        {
            path: ':id/edit', component: () => import('./views/UserEdit.vue'),
        }
    ]
}) as const satisfies RouteRecordRaw