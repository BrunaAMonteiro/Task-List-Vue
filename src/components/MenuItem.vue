<template>
    <router-link 
        :to="redirectTo"
        class="text-espeon-purple-900 p-2 hover:underline"
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