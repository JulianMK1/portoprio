<template>
<div class="navbar">
    <div class="navbar-container">
      <div class="logo"></div>
      <ul class="nav-links">
        <li><router-link to="/">Random Joke</router-link></li>
        <li><router-link to="/SearchBar">Search Bar</router-link></li>
      </ul>
    </div>
  </div>
</template>
  
  
<script>
export default {
    name: 'NavBar',
        methods: {
          navigateToComponent(path) {
            this.$route.push(path);
          }
        }
}
</script>
  
  
<style scoped>


.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
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
  color: #333333;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ff5500;
}
</style>