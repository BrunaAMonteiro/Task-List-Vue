<template>
    <header class="bg-white-light-250 
    dark:bg-espeon-purple-200 border-b 
    border-white-200 
    dark:border-espeon-purple-300 sticky top-0 z-50" >

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
                class="px-4 py-2 rounded-lg
                text-espeon-purple-900
                dark:text-white-200 bg-transparent border
                border-white-200
                dark:border-espeon-purple-200 cursor-pointer transition-all duration-200 font-medium
                hover:border-gray-100
                dark:hover:border-gray-light-200
                hover:text-espeon-lavanda-light-300 
                dark:hover:text-espeon-lavanda-100
                dark:hover:bg-espeon-purple-360
            "
            >
                {{ isDark ? 'Modo Light' : 'Modo Dark' }}
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