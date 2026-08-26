<template>
    <router-link 
        :to="redirectTo"
        :class="[
            'px-6 py-3 text-espeon-purple-900 dark:text-white-200 font-medium',
            'rounded-lg border border-transparent transition-all duration-200  hover:bg-white-light-150 dark:hover:bg-espeon-purple-360',
            'hover:text-espeon-lavanda-light-300          dark:hover:text-espeon-lavanda-100hover:no-underline',
            'hover:border-espeon-lavanda-100 dark:hover:border-espeon-lavanda-100'
        ]"
    >
        {{ title }}
    </router-link>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        redirectTo: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>

