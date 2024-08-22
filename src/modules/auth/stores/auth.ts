import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const loggedIn = ref(false);

    function isLoggedIn() {
        const token = localStorage.getItem('token')
        loggedIn.value = token ? true : false;
        return loggedIn.value
    }

    function setLogin(v: boolean) {
        loggedIn.value = v

        if (v) {
            localStorage.setItem('token', 'token')
            return
        }

        localStorage.removeItem('token')
    }

    return { isLoggedIn, setLogin }
});