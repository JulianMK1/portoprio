<template>
  <div>
    <h2>Programming Jokes</h2>
    <ul v-if="jokes.length > 0">
      <li v-for="(joke, index) in jokes" :key="index" class="joke-box">
        <div v-if="joke.type === 'single'">{{ joke.joke }}</div>
        <div v-else>
          <p>{{ joke.setup }}</p>
          <p>{{ joke.delivery }}</p>
        </div>
      </li>
    </ul>
    <p v-else>No programming jokes available.</p>
    <div class="button-container">
      <button @click="fetchMoreJokes" v-if="hasMoreJokes" class="show-more-button">+</button>
      <p v-else>There are no more jokes left...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProgrammingJokes',
  data() {
    return {
      jokes: [],
      hasMoreJokes: true, // Ob weitere Witze verfügbar sind
    };
  },
  created() {
    this.fetchProgrammingJokes();
  },
  methods: {
    async fetchProgrammingJokes() {
      try {
        const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Programming?amount=10');
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
        const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Programming?amount=5');
        const data = response.data;

        if (data.error) {
          console.log('No more jokes available.');
          this.hasMoreJokes = false; // Keine weiteren Witze verfügbar
          return;
        }

        const newJokes = data.jokes.filter((newJoke) => {
          return !this.jokes.some((existingJoke) => existingJoke.id === newJoke.id);
        });

        if (newJokes.length === 0) {
          this.hasMoreJokes = false; // Keine weiteren Witze verfügbar
          return;
        }

        this.jokes.push(...newJokes);
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
  font-size: 24px; /* Hinzugefügt */
}

ul {
  list-style-type: none;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

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
</style>
