<template>
    <ul>
    <li class="col1-item1"> Product: {{this.productName}}</li>

    <li class="col2-item1">Description: {{this.productDescription}}</li>

    <li class="col3-item1">Price: {{this.productPrice}} $</li>
</ul>
</template>

<script>

import axios from 'axios';

export default {
name: 'Basket',
  data() {
    return {
      nbProducts: 0,
      products: []
    };
  },
  methods: {
    
    async getAllProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        this.products = response.data;
        this.nbProducts = this.products.length;
      } catch (error) {
        console.log(error)
      }
    },
}
}
</script>

<style scoped>
    ul {
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "col1-item1 col2-item1 col3-item1"; 
}
.col1-item1 { 
    grid-area: col1-item1; 
}
.col2-item1 { 
    grid-area: col2-item1; 
}
.col3-item1 { 
    grid-area: col3-item1; 
}

</style>