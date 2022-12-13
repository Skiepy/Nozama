<template>
  <MyHeader></MyHeader>
  <div id="space"></div>
  <div class="all">
    <div v-if="(nbProducts > 0)">

      <h1 style="text-align:left; padding-left : 185px" id="classics">The classics</h1>
      <div id="size" style="padding-left : 150px">
        <div v-for="product in products.slice(0, 3)" id="divProduct">
          <MyProduct :id="product.id_product"></MyProduct>
        </div>

      </div>

      <h1 style="text-align:right; padding-right : 185px" id="slippers">The Slippers</h1>
      <div id="size" style="padding-right : 150px; justify-content: right;">
        <div v-for="product in products.slice(3, 6)" id="divProduct">
          <MyProduct :id="product.id_product"></MyProduct>
        </div>
      </div>

      <h1 style="text-align:left; padding-left : 185px" id="fancy">The Fancy</h1>
      <div id="size" style="padding-left : 150px">
        <div v-for="product in products.slice(6, 9)" id="divProduct">
          <MyProduct :id="product.id_product"></MyProduct>
        </div>
      </div>
      <div id="space"></div>
    </div>

    <div v-if="(nbProducts == 0)">
      No products available, we apologize for the inconvenience.
    </div>

    <div class="slides">
      <Slider></Slider>
    </div>
    
    <hr style="height: 2px; color:  #221F1F; background-color:  #221F1F; width: 50%; border: none;">
    <div class="text" style="background-color : white">
      <div class="container">
        <div class="contenant">
          <img src="@/assets/Images/homepage/chaussonscrocs.webp" alt="" class="img">
          <p class="p1">ELECTED MOST COMFORTABLE SHOES</p>
        </div>
        <div class="contenant">
          <img src="@/assets/Images/homepage/crocss.webp" alt="" class="img">
          <p class="p1">CUSTOMIZE YOUR CROCS!</p>
        </div>
        <div class="contenant">
          <img src="@/assets/Images/homepage/fashioncrocs.webp" alt="" class="img">
          <p class="p1">100% MADE IN RECYCLED PLASTIC</p>
        </div>
      </div>
    </div>
    <hr style="height: 2px; color:  #221F1F; background-color:  #221F1F; width: 100%; border: none; margin-bottom: 5%;">
    <div class="container1">
      <div class="contenant1">
        <img src="@/assets/Images/homepage/maison.png" alt="" class="img1">
        <p class="p2">Free shipping over $10</p>
      </div>
      <div class="contenant1">
        <img src="@/assets/Images/homepage/medaille.png" alt="" class="img1">
        <p class="p2">100 days warrant</p>
      </div>
      <div class="contenant1">
        <img src="@/assets/Images/homepage/carton.png" alt="" class="img1">
        <p class="p2">Free Returns</p>
      </div>
      <div class="contenant1">
        <img src="@/assets/Images/homepage/fleches.png" alt="" class="img1">
        <p class="p2">Secure Transactions</p>
      </div>
    </div>
  </div>
  <MyFooter></MyFooter>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyFooter from '@/components/MyFooter.vue';
import MyHeader from '@/components/MyHeader.vue';
import MyProduct from '@/components/MyProduct.vue';
import Slider from '@/components/Slider.vue';

import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MyHeader,
    MyFooter,
    MyProduct,
    Slider
  },
  data() {
    return {
      nbProducts: 0,
      products: [],
      classics : "classicsUnique",
      slippers : "slippersUnique",
      fancy : "fancyUnique",
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
    createSessionId() {
      if (window.$cookies.get("sessionId") == null) {
        window.$cookies.set("sessionId", Date.now());
      }
    },
  },

  beforeMount() {
    this.createSessionId();
    this.getAllProducts();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap%27');

#space {
  padding-top: 140px;
}

#size {
  display: flex;
  min-width: 0;
}




#divProduct {
  margin: 10px;
}

.contenant {
  position: relative;
  text-align: center;
  color: #fc9a00;
  font-family: 'Rubik', sans-serif;
  text-shadow: black 0.1em 0.1em 0.2em
}

.p1 {
  font-size: 150%;
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.p2 {
  font-size: 100%;
}

.text {
  background-color: #f4f4f1;
  padding-top: 5%;
  padding-bottom: 5%;
}

.img {
  width: 400px;
  height: 400px;
  object-fit: cover;
}

.img1 {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.container {
  column-count: 3;
}

.container1 {
  margin: 5%;
  column-count: 4;
}

.slides {
  background-color: #f4f4f1;
  margin-right: 12%;
  margin-left: 12%;
  height: 27%;
  width: 25%;
}
</style>