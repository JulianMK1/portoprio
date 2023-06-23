<template>
    <div>
      <h2>Dark Jokes</h2>
      <ul v-if="jokes.length > 0">
        <li v-for="(joke, index) in jokes" :key="index" class="joke-box">
          <div v-if="joke.type === 'single'">{{ joke.joke }}</div>
          <div v-else>
            <p>{{ joke.setup }}</p>
            <p>{{ joke.delivery }}</p>
          </div>
        </li>
      </ul>
      <p v-else>No dark jokes available.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'DarkJokes',
    data() {
      return {
        jokes: [], // Array für die Witze
      };
    },
    created() {
      this.fetchJokes();
    },
    methods: {
    async fetchJokes() {
      try {
        const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Dark?amount=10');
        const data = response.data;

        if (data.error) {
          this.jokes = []; // Keine Witze gefunden
        } else {
          this.jokes = data.jokes;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
  </script>
  
  <style scoped>
  p {
    font-size: 24px;
  }
  
  .joke-box {
    background-color: #f1f1f1;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
  }
  </style>
  