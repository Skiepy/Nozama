<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <MyHeader></MyHeader>
<!-- <div class="all">
  <div class="product">
    <MyProduct></MyProduct>
  </div>
  <div class="product1">
    <MyProduct></MyProduct>
  </div>
  <div class="product2">
    <MyProduct></MyProduct>
  </div>
  <div class="product3">
    <MyProduct></MyProduct>
  </div>
</div> -->
  <div v-if="(nbProducts > 0)">
    <div v-for="product in products">
      <MyProduct :id="product.id_product"></MyProduct>
    </div>
  </div>
  <div v-if="(nbProducts == 0)">
    No products available, we apologize for the inconvenience.
  </div>

  <MyFooter></MyFooter>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyFooter from '@/components/MyFooter.vue';
import MyHeader from '@/components/MyHeader.vue';
import MyProduct from '@/components/MyProduct.vue';

import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MyHeader,
    MyFooter,
    MyProduct
  },
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
  },

  beforeMount() {
    this.getAllProducts();
  }
}
</script>

<style scoped>
.all{
  margin-bottom: 100px;
  padding-bottom: 20px;
  margin-left: 20px;
  padding: 60px;
  height: 900px;
  background-color: white;
}
.product{
  position: abolute;
  box-sizing:border-box;
  padding-right: 50%;
  height: 50px;
  background-color: white;
  float: left;
}
.product2{
  position: abolute;
  box-sizing:border-box;
  padding-right: 50%; 
  padding-top: 30% ;
  height: 50px;
  background-color: white;
  float: left;
}
.product1{
  position: absolute;
  box-sizing: border-box;
  padding-left: 50%;
  padding-bottom: 0%;
  padding-top: 30% ;
  height: 50px;
  background-color: white;
  float: right;
}
.product3{
  position: absolute;
  box-sizing: border-box;
  padding-left: 50%;
  padding-bottom: 0%;
  height: 50px;
  background-color: white;
  float: right;
}
</style>