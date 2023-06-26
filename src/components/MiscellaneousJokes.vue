<template>
  <div>
    <h2>Miscellaneous Jokes</h2>
    <ul v-if="jokes.length > 0">
      <li v-for="(joke, index) in jokes" :key="index" class="joke-box">
        <div v-if="joke.type === 'single'" class="joke-text">{{ joke.joke }}</div>
        <div v-else>
          <p class="joke-setup">{{ joke.setup }}</p>
          <p class="joke-delivery">{{ joke.delivery }}</p>
        </div>
      </li>
    </ul>
    <p v-else>No miscellaneous jokes available.</p>
    <div class="button-container">
      <button @click="fetchMoreJokes" v-if="hasMoreJokes" class="show-more-button">+</button>
      <p v-else>There are no more jokes left...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MiscellaneousJokes',
  data() {
    return {
      jokes: [],
      hasMoreJokes: true, // Ob weitere Witze verfügbar sind
    };
  },
  created() {
    this.fetchMiscellaneousJokes();
  },
  methods: {
    async fetchMiscellaneousJokes() {
      try {
        const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Miscellaneous?amount=10');
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
        const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Miscellaneous?amount=5');
        const data = response.data;

        if (data.error) {
          console.log('No more jokes available.');
          this.hasMoreJokes = false; // Keine weiteren Witze verfügbar
          return;
        }

        if (data.jokes.length === 0) {
          this.hasMoreJokes = false; // Keine weiteren Witze verfügbar
          return;
        }

        this.jokes.push(...data.jokes);
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

.joke-text {
  font-size: 24px;
}

.joke-setup,
.joke-delivery {
  font-size: 24px;
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

.show-more-button:hover {
  background-color: #ddd;
}
</style>
