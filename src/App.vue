<template>
  <div>
    <nav-bar />

    <main> 
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