<template>
    <div class="search-bar">
        <input type="text" v-model="searchTerm" placeholder="Suchen...">
        <button type="submit" @click="search">Suchen</button>
    </div>
</template>
  
  
<script>

export default {
    data() {
        return {
            searchTerm: ''
        };
    },
    methods: {
        search() {


            console.log('Suche nach:', this.searchTerm);
        }
    }
};
</script>
  
<style scoped>
.search-bar {
    display: flex;
    align-items: center;
}

.search-bar input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
}

.search-bar button[type="submit"] {
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.search-bar button[type="submit"]:hover {
    background-color: #45a049;
}
</style>
  