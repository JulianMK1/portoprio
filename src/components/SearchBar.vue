<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Type for search..." class="search-input" @keyup.enter="fetchJokes">
    <button @click="fetchJokes" class="search-button">Search</button>
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
      <p v-else>Unfortunately, we don't have a joke to that...</p>
    </div>
    <button @click="fetchMoreJokes" v-if="jokes !== null && jokes.length > 0" class="show-more-button">+</button>
  </div>
</template>

<style>
p {
  font-size: 24px;
}

.search-input {
  font-size: 16px;
  padding: 10px 20px;
  width: 300px;
}

.search-button {
  font-size: 16px;
  padding: 10px 20px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #e0e0e0;
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
  margin-left: auto;
  margin-right: auto;
}


.show-more-button:hover {
  background-color: #e0e0e0;
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

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      jokes: null,
      title: 'Witze',
      jokeCount: 10 // Anfangsanzahl der Witze
    };
  },
  methods: {
    async fetchJokes() {
      try {
        const response = await axios.get(`https://sv443.net/jokeapi/v2/joke/Any?amount=${this.jokeCount}&contains=${this.searchQuery}`);
        const data = response.data;

        if (data.error) {
          this.jokes = [];
        } else {
          this.jokes = data.jokes;
        }

        this.title = this.searchQuery !== '' ? `Jokes about "${this.searchQuery}:"` : 'Witze';
      } catch (error) {
        console.error(error);
      }
    },
    async fetchMoreJokes() {
      try {
        const response = await axios.get(`https://sv443.net/jokeapi/v2/joke/Any?amount=5&contains=${this.searchQuery}`);
        const data = response.data;

        if (data.error) {
          console.error(data.message);
          return;
        }

        this.jokes = [...this.jokes, ...data.jokes];
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>



