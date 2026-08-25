<template>
    <header class="bg-white-light-150 dark: bg-gray-900 border-b border-white-light-250 dark: border-gray-800 sticky top-0 z-50" >

        <div class="flez items-center gap-4">

            <MenuItem 
                redirect-to="/login" 
                title="Login" 
            />
            <MenuItem 
                redirect-to="/register" 
                title="Cadastre-se" 
            />
            <MenuItem 
                redirect-to="/tasks" 
                title="Tarefas" 
            />

            <button 
                @click="toggleTheme"
                class="px-4 py-2 rounded-lg text-espeon-purple-light-900 dark:text-white-200 bg-transparent border border-white-light-250 dark:border-espeon-purple-200 cursor-pointer transition-all duration-200 font-medium hover:border-gray-100 dark:hover:border-gray-light-200 hover:text-espeon-lavanda-light-300 dark:hover:text-espeon-lavanda-100"
    
            >
                {{ isDark ? 'Modo Dark' : 'Modo Light' }}
            </button>
        </div>
        
    </header>
</template>

<script>
import MenuItem from './MenuItem.vue';
import {useTheme} from '@/composables/useTheme'
    export default {
    name: 'NavBar',
    components: {
        MenuItem
    },
    setup() {
        const { isDark, toggleTheme } = useTheme()
        return {
            isDark,
            toggleTheme
        }
    }
    }

</script>