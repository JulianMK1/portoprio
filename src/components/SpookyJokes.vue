<template>
    <div>
      <h2>Spooky Jokes</h2>
      <ul v-if="jokes.length > 0">
        <li v-for="(joke, index) in jokes" :key="index" class="joke-box">
          <div v-if="joke.type === 'single'">{{ joke.joke }}</div>
          <div v-else>
            <p>{{ joke.setup }}</p>
            <p>{{ joke.delivery }}</p>
          </div>
        </li>
      </ul>
      <p v-else>No spooky jokes available.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'SpookyJokes',
    data() {
      return {
        jokes: [],
      };
    },
    created() {
      this.fetchSpookyJokes();
    },
    methods: {
    async fetchSpookyJokes() {
      try {
        const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Spooky?amount=10');
        const data = response.data;

        if (data.error) {
          this.jokes = [];
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
.joke-box {
  background-color: #f1f1f1;
  padding: 10px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
}

p {
  font-size: 24px;
}
</style>