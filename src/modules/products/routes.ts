import type { RouteRecordRaw } from 'vue-router';

export default (prefix: string) => ({
    path: prefix,
    children: [
        {
            path: '', component: () => import('./views/ProductIndex.vue'),
        },
        {
            path: ':id', component: () => import('./views/ProductItem.vue'),
        },
    ]
}) as const satisfies RouteRecordRaw