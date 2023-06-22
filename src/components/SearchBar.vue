<template>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Suche nach Witzen">
      <button @click="fetchJokes">Suche</button>
      <div v-if="jokes !== null">
        <h2>{{ title }}</h2>
        <ul v-if="jokes.length > 0">
          <li v-for="(joke, index) in jokes" :key="index" class="joke-box">
            <div v-if="joke.type === 'single'">{{ joke.joke }}</div>
            <div v-else>
              <p>{{ joke.setup }}</p>
              <p>{{ joke.delivery }}</p>
            </div>
          </li>
        </ul>
        <p v-else>Dazu haben wir leider keinen Witz...</p>
      </div>
    </div>
  </template>
  
  <style>
  .joke-box {
    background-color: #f1f1f1;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none; /* Entfernt den Punkt vor jedem Listenelement */
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        jokes: null, // Vorläufiger Wert, um zwischen Zuständen zu unterscheiden
        title: 'Witze' // Standardtitel
      };
    },
    methods: {
      async fetchJokes() {
        try {
          const response = await fetch(`https://sv443.net/jokeapi/v2/joke/Any?amount=10&contains=${this.searchQuery}`);
          const data = await response.json();
          
          if (data.error) {
            this.jokes = []; // Keine Witze gefunden
          } else {
            this.jokes = data.jokes;
          }
          
          // Setze den Titel basierend auf der Benutzereingabe
          this.title = this.searchQuery !== '' ? `Witze über "${this.searchQuery}"` : 'Witze';
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  