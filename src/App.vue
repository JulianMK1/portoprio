<template>
  <h1>Welcome to our awesome page</h1>
  <img src="./assets/Logo.png" alt="Bild konnte nicht geladen werden">
  <NavBar />
  <randomJoke />
  <SearchBar />
  <RadioButton />
  <radio-button :options="radioOptions" v-model="selectedValue"></radio-button>
</template>




<script>

import NavBar from './components/NavBar.vue'
import randomJoke from './components/randomJoke.vue'
import SearchBar from './components/SearchBar.vue'
import RadioButton from './components/RadioButton.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    randomJoke,
    SearchBar,
    RadioButton
  },
  data() {
    return {
      radioOptions: [
        { value: 'option1', label: 'Random Joke' },
        { value: 'option2', label: 'Custom Joke' },
      ],
      selectedValue: 'option1'
    };
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
