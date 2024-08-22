import type { RouteRecordRaw } from 'vue-router';

export default (prefix: string) => ({
    path: prefix,
    children: [
        {
            path: '', component: () => import('./views/LoginView.vue'),
        },
        {
            path: 'register', component: () => import('./views/RegisterView.vue'),
        },
    ]
}) as const satisfies RouteRecordRaw