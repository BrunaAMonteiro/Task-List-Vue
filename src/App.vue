
<template>
  <div>
    <header>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Cadastre-se</router-link>
      <router-link to="/tasks">Tarefas</router-link>
    </header>

    <main> 
      <router-view />
    </main>

  </div>
</template>
