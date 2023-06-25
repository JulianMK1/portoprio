<template>
  <div>
    <h2>Christmas Jokes</h2>
    <ul v-if="jokes.length > 0">
      <li v-for="(joke, index) in jokes" :key="index" class="joke-box">
        <div v-if="joke.type === 'single'">{{ joke.joke }}</div>
        <div v-else>
          <p>{{ joke.setup }}</p>
          <p>{{ joke.delivery }}</p>
        </div>
      </li>
    </ul>
    <p v-else>No Christmas jokes available.</p>
    <div class="button-container">
      <button @click="fetchMoreJokes" v-if="jokes.length > 0" class="show-more-button">+</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChristmasJokes',
  data() {
    return {
      jokes: [],
      jokeCount: 10,
    };
  },
  created() {
    this.fetchChristmasJokes();
  },
  methods: {
    async fetchChristmasJokes() {
      try {
        const response = await axios.get(`https://sv443.net/jokeapi/v2/joke/Christmas?amount=${this.jokeCount}`);
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
        const response = await axios.get(`https://sv443.net/jokeapi/v2/joke/Christmas?amount=5`);
        const data = response.data;

        if (data.error) {
          console.error(data.message);
          return;
        }

        this.jokes = [...this.jokes, ...data.jokes];
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

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}

.show-more-button {
  font-size: 16px;
  padding: 10px 20px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
}
</style>
