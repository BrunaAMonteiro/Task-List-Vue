export const storage = {
    get(key) {
        try {
            return localStorage.getItem(key)
        }
        catch (error) {
            console.error('Erro ao acessar localStorage:', error)
        }
    },

    set(key, value){
        try {
                localStorage.setItem(key, value)
        } catch (error) {
            console.log('Erro ao salvar:', error)
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key)
        } catch (error) {
            console.error('Erro ao remover:', error)
        }
    }
}