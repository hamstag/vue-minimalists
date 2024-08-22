<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/stores/auth';
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()

function logout() {
    useAuthStore().setLogin(false)
    router.push('/auth')
}
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/admin/dashboard">Dashboard</RouterLink>
                <RouterLink to="/admin/products">Products</RouterLink>
                <RouterLink to="/admin/users">Users</RouterLink>
                <button @click="logout">Logout</button>
            </nav>
        </div>
    </header>

    <RouterView />
</template>