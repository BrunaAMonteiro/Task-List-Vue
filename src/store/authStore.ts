import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authService } from '@/services/authService'
import { storage } from '@/utils/storage'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()

    const user = ref(null)
    const token = ref(storage.get('token'))
    const loading = ref(false)
    const error = ref(null)

    // retorna true ou false quando o user tiver logado ou nao
    const isAuthenticated = computed(() => !!token.value)
    const currentUser = computed(() => user.value)
    const isLoading = computed(() => loading.value)
    const hasError = computed(() => error.value)
    const userName = computed(() => user.value?.username || '')

    const login = async (credentials) => {
        loading.value = true
        error.value = null

        try {
            const response = await authService.login(credentials)
            token.value = response.token

            user.value = {
                id: response.userId,
                username: response.username
            }

            storage.set('token', response.token)
            storage.set('user', JSON.stringify(user.value))

            router.push('/tasks')

            return response

        } catch (err) {
            error.value = err.response?.data?.menssage || 'Erro ao fazer o login'
            console.error('Erro ao fazer o login:', err)
            throw err
        } finally {
            loading.value = false
        }
    }

    const checkAuth = () => {
        const savedToken = storage.get('token')
        const savedUser = storage.get('user')

        if (savedToken && savedUser) {
            token.value = savedToken
            user.value = JSON.parse(savedUser)

        }
    }

    return {
        user,
        token,
        loading,
        error,
        isAuthenticated,
        currentUser,
        isLoading,
        hasError,
        userName,
        login,
        checkAuth
    }

})