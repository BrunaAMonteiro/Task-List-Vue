<template>
  <div
    class="min-h-screen bg-white-light-150 dark: bg-espeon-purple-100 transitions-colors duration-200ms"
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