<template>
  <h1>Willkommen auf unserer Seite</h1>
  <img src="./assets/Logo.png" alt="Bild konnte nicht geladen werden">
  <NavBar />
  <ButtonBar />
  <SearchBar />
  <RadioButton />
  <radio-button :options="radioOptions" v-model="selectedValue"></radio-button>
</template>




<script>

import NavBar from './components/NavBar.vue'
import ButtonBar from './components/ButtonBar.vue'
import SearchBar from './components/SearchBar.vue'
import RadioButton from './components/RadioButton.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    ButtonBar,
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
