<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <MyHeader></MyHeader>
  <div id="space"></div>
  <div class="all">
    <div v-if="(nbProducts > 0)">

      <h1 style="text-align:left; padding-left : 185px">The classics</h1>
      <div id="size" style="padding-left : 150px">
        <div v-for="product in products.slice(0, 3)" id="divProduct">
          <MyProduct :id="product.id_product"></MyProduct>
        </div>

      </div>

      <h1 style="text-align:right; padding-right : 185px">The Slippers</h1>
      <div id="size" style="padding-right : 150px; justify-content: right;">
        <div v-for="product in products.slice(3, 6)" id="divProduct">
          <MyProduct :id="product.id_product"></MyProduct>
        </div>
      </div>

      <h1 style="text-align:left; padding-left : 185px">The Fancy</h1>
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
    <!-- <hr width="2250px" height="2000px"> -->
    <div class="text">
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

    <div class="reveal fade-bottom" id="NewArrival">
      <img src="@/assets/Images/homepage/crocscarrots.webp" alt="" class="imgnewarr">
      <div class="TextNewArrival">
        <p class="BigText" style="text-align: justify">NEW ARRIVALS</p>
        <p class="MiddleText">Crocs footwear collection.
          Comfortable clogs, casual flip flops, dressy sandals and work shoes for on-the-job comfort, and much more!</p>
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

#NewArrival {
  margin-bottom: 100px;
  margin-left: 20px;
  padding: 60px;
  height: 500px;
  background-color: white;
  color: white;
}

.TextNewArrival {
  margin-top: 20px;
  margin-right: 100px;
  margin-left: 450px;
}

.MiddleText {
  font-family: 'Rubik', sans-serif;
  text-align: justify;
  color: #221F1F;
  font-size: 25px;
}

.BigText {
  padding-top: 7%;
  font-family: 'Rubik', sans-serif;
  color: #221F1F;
  font-size: 50px;
}

.imgnewarr {
  width: 400px;
  float: left;
  display: block;
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}

.active.fade-bottom {
  animation: fade-bottom 1s ease-in;
}

@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
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