import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import ProgrammingJokes from '@/components/ProgrammingJokes.vue';
import App from './App.vue'
import PunJokes from '@/components/PunJokes.vue';
import ChristmasJokes from '@/components/ChristmasJokes.vue';
import MiscellaneousJokes from '@/components/MiscellaneousJokes.vue';
import SpookyJokes from '@/components/SpookyJokes.vue';
import randomJoke from './components/randomJoke.vue';
import SearchBar from './components/SearchBar.vue';
import DarkJokes from '@/components/DarkJokes.vue';





const routes = [

    {
        path: '/category/Programming',
        name: 'ProgrammingJokes',
        component: ProgrammingJokes,

    },
    { path: '/', component: randomJoke },
    { path: '/SearchBar', component: SearchBar },
    {
        path: '/category/Miscellaneous',
        name: 'MiscellaneousJokes',
        component: MiscellaneousJokes,
      },
      {
        path: '/category/Pun',
        name: 'PunJokes',
        component: PunJokes,
      },
      {
        path: '/category/Spooky',
        name: 'SpookyJokes',
        component: SpookyJokes,
      },
      {
        path: '/category/Christmas',
        name: 'ChristmasJokes',
        component: ChristmasJokes,
      },
      {
        path: '/category/Dark',
        name: 'DarkJokes',
        component: DarkJokes,
      },



  ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


const app = createApp(App);
app.use(router);
app.mount('#app');