<template>
  <div>
    <h2>Pun Jokes</h2>
    <ul v-if="jokes.length > 0">
      <li v-for="(joke, index) in jokes" :key="index" class="joke-box">
        <div v-if="joke.type === 'single'">{{ joke.joke }}</div>
        <div v-else>
          <p>{{ joke.setup }}</p>
          <p>{{ joke.delivery }}</p>
        </div>
      </li>
    </ul>
    <p v-else>No pun jokes available.</p>
    <div class="button-container">
      <button @click="fetchMoreJokes" v-if="jokes.length > 0" class="show-more-button">+</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PunJokes',
  data() {
    return {
      jokes: [],
    };
  },
  created() {
    this.fetchPunJokes();
  },
  methods: {
    async fetchPunJokes() {
      try {
        const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Pun?amount=10');
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
    async fetchMoreJokes() {
      try {
        const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Pun?amount=5');
        const data = response.data;

        if (data.error) {
          console.log('No more jokes available.');
        } else {
          this.jokes.push(...data.jokes);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.show-more-button {
  font-size: 24px;
  padding: 10px 20px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.show-more-button:hover {
  background-color: #e0e0e0;
}

.button-container {
  display: flex;
  justify-content: center;
}
</style>
