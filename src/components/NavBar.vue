<template>
  <div class="navbar">
    <div class="navbar-container">
      <router-link to="/">
        <div class="logo">
          <img class="logo-image" src="../assets/Logo.png" alt="Logo">
        </div>
      </router-link>
      <ul class="nav-links">
        <li><router-link to="/">Random Joke</router-link></li>
        <li><router-link to="/SearchBar">Search Bar</router-link></li>
        <li class="dropdown">
          <span class="dropdown-toggle">Categories</span>
          <ul class="dropdown-menu">
            <li v-for="category in categories" :key="category">
              <router-link :to="`/category/${category}`">{{ category }} Jokes</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      categories: ['Programming', 'Miscellaneous', 'Pun', 'Spooky', 'Christmas', 'Dark'], // Liste der Witzekategorien
    };
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #8b9590;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.logo-image {
  width: 80px;
  height: auto;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-links li {
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #42b983;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  list-style: none;
  background-color: #f1f1f1;
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
