<template>
  <h1>Welcome to our awesome page</h1>
  <img src="./assets/Logo.png" alt="Bild konnte nicht geladen werden">
  <NavBar />
  <router-view>  </router-view>
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
#app {

  font-family: Avenir,
  Helvetica,
  Arial,
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #292863;
  margin-top: 60px;
}</style>
