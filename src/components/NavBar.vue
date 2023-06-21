<template>
  <nav class="navbar">
    
    <ul>

      <li><a href="#home">Home</a></li>
      <li><a href="#favourites">Favourites</a></li>      
      <li><a href="#search">Type a topic...</a></li>
      <li><a href="#info">Kontakt</a></li>


    </ul>
  </nav>
</template>
  
  
<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, label: 'Home' },
        { id: 2, label: 'Favourites' },
        { id: 3, label: 'Kontakt' },
      ]
    };
  }
}
</script>
  
  
<style scoped>


/* Allgemeine Stile für die NavBar */
.navbar {
  background-color: #42b983;
  padding: 15px;
}

/* Stil für die Liste der NavBar-Elemente */
.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* Stil für jedes einzelne NavBar-Element */
.navbar li {
  display: inline-block;
  margin-right: 10px;
}

/* Stil für den Link innerhalb jedes NavBar-Elements */
.navbar li a {
  color: #333;
  text-decoration: none;
  padding: 5px;
}

/* Stil für den aktiven Link */
.navbar li a.active {
  color: #fff;
  background-color: #333;
}

/* Stil für den Hover-Effekt */
.navbar li a:hover {
  color: #fff;
  background-color: #666;
}
</style>