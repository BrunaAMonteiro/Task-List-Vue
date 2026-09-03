import axios from 'axios'
import {storage} from '@/utils/storage'

export const api = axios.create({
    baseUrl: 'http//localhost:3000/api',
    timeout: 10000
})

api.interceptors.request.use(
    (config) => {
        const token = storage.get('token')
        if (token) { // se tem token, está logado.
            config.headers.Authorization = `Bearer ${token} `
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401) {
            storage.remove('token')
            storage.remove('user')
            window.location.href ='/login'
        }
        return Promise.reject(error)
    }
)