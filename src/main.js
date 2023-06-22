import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import randomJoke from './components/randomJoke.vue';
import SearchBar from './components/SearchBar.vue';

const routes = [
    {path: '/', component: randomJoke },
    {path: '/SearchBar', component: SearchBar },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

//createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.mount('#app');