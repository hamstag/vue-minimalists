import type { RouteRecordRaw } from 'vue-router'

export default (prefix: string) => ({
    path: prefix, component: () => import('./views/DashboardView.vue'),
}) as const satisfies RouteRecordRaw