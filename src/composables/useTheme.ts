import { ref, onMounted} from 'vue'

export function useTheme() {
    const isDark = ref(false)

    const toggleTheme = () => {
        isDark.value = !isDark.value

        if (isDark.value) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            return
        }
        
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        
    }

    const initializeTheme = () => {
        const saveTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (saveTheme === 'dark' || (!saveTheme && prefersDark)) {
            isDark.value = true
            document.documentElement.classList.add('dark')
        }
    }

    onMounted(() => {
        initializeTheme()
    })

    return {
        isDark,
        toggleTheme,
        initializeTheme
    }
}