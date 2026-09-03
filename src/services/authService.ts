import { api } from "./api";

export const authService = {
    async login(credentials) {
        const response = await api.post('/auth/login', credentials)
        return response.data
    }
}