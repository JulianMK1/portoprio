<template>
  <div>
    <button class="random-joke-button" @click="getJoke">Random Joke</button>
    <p>{{ joke }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      joke: '',
    };
  },
  created() {
    this.getJoke();
  },
  methods: {
    getJoke() {
      axios.get('https://sv443.net/jokeapi/v2/joke/Any') // GET-Anfrage an die JokeAPI-URL mit einer zufälligen Kategorie"
        .then(response => {
          if (response.data.type === 'single') {

            this.joke = response.data.joke;
          } else if (response.data.type === 'twopart') {

            this.joke = response.data.setup + ' ' + response.data.delivery;
          }
        })
        .catch(error => {
          console.error('Fehler beim Abrufen des Witzes:', error);
        });
    },
  },
};
</script>





<!-- Hier steht nur CSS...irrelevant-->

<style scoped>
.random-joke-button {
  font-size: 40px; /* Ändere die Schriftgröße, um den Button größer zu machen */
  padding: 10px 30px; /* Passe das Padding an, um den Button größer zu machen */
}

h3 {
  margin: 40px 0 0;
}

p{
  font-size: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>