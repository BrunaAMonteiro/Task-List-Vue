<template>
  <div
    class="min-h-screen bg-white-100 dark:bg-espeon-purple-100 transitions-colors duration-200ms
    dark:text-white-200"
  >
    <nav-bar />

    <main class="container mx-auto px-4 py-8 max-w-7xl"> 
    
      <router-view />
    </main>

  </div>
</template>
<script>

  import NavBar from './components/NavBar.vue';
  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
</script>