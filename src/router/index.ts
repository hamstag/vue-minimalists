import { createRouter, createWebHistory } from 'vue-router'
import { auth, dashboard, home, products, users } from "@/modules";
import DefaultLayout from "@/core/views/DefaultLayout.vue";
import GuestLayout from "@/core/views/GuestLayout.vue";
import AdminLayout from "@/core/views/AdminLayout.vue";
import NotFound from "@/core/components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: DefaultLayout,
      children: [
        home.routes(''),
      ]
    },
    {
      path: '/auth', component: GuestLayout,
      children: [
        auth.routes(''),
      ],
    },
    {
      path: '/admin', component: AdminLayout,
      meta: { requiresAuth: true, isAdmin: true },
      children: [
        dashboard.routes('dashboard'),
        products.routes('products'),
        users.routes('users'),
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !auth.useAuthStore().isLoggedIn()) {
    return {
      path: '/auth',
      query: { redirect: to.fullPath },
    }
  }
})

export default router