<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from "../stores/auth";

const router = useRouter()

function login() {
    useAuthStore().setLogin(true)
    router.push('/admin/dashboard')
}
</script>

<template>
    <h1>This is an login page</h1>
    <nav>
        <button @click="login">Login</button>
        <RouterLink to="/admin/products">Go to Products</RouterLink>
        <RouterLink to="/auth/register">Go to Register</RouterLink>
    </nav>
</template>