<template>
    <header>

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
        
    </header>
</template>

<script>
import MenuItem from './MenuItem.vue';
    export default {
    name: 'NavBar',
    components: {
        MenuItem
    }
    }

</script>