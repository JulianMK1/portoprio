<template>
  <div id="app">
    <h1>Welcome to our awesome page</h1>
    <img class="logo" src="./assets/Logo.png" alt="Bild konnte nicht geladen werden">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app, html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  margin-top: 60px;
  background-color: #f8f8f0;
}

h1{
  font-size: 50px;
}

.logo {
  width: 450px; /* Neue Breite des Bildes */
  height: auto; /* Höhe passt sich an */
}
</style>
