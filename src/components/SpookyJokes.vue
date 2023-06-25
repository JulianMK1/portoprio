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
    <button @click="fetchMoreJokes" v-if="jokes.length > 0" class="show-more-button">+</button>
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
    async fetchMoreJokes() {
      try {
        const response = await axios.get('https://sv443.net/jokeapi/v2/joke/Spooky?amount=5');
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

.show-more-button {
  font-size: 24px;
  padding: 10px 20px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
}
</style>
