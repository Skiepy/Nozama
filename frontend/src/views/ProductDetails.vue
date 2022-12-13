<template>
  <MyHeader></MyHeader>

  <head>
    <title class="title">Vue Mastery</title>
  </head>

  <body>
    <div id="app">
      <div class="nav-bar"></div>

      <div id="space"></div>

      <div class="product-container" style=" width:100%; height : 400px;">
        <img :src="getImgPath()" alt="" class="img">
        <div class="product-info">
          <h1>{{ product }}</h1>
          <p>In Stock !</p>
          <p>{{ description }}</p>
          <p>{{ price }}$</p>
          <button class="button" @click="addToCart" v-if="!inCart">Add to
            Cart</button>
          <button class="button" @click="checkout" v-if="inCart">Go to
            checkout</button>
          <button class="button" @click="continueShop" v-if="inCart">Continue Shopping</button>

        </div>
      </div>
    </div>
  </body>
  <MyFooter></MyFooter>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue';
import MyHeader from '@/components/MyHeader.vue';
import axios from 'axios';
export default {
  components: {
    MyHeader,
    MyFooter,
  },
  data() {
    return {
      cart: 0,
      product: '',
      brand: 'Crocs',
      description: "",
      price: "",
      path: "",
      inCart: false
    }
  },
  methods: {
    async getProduct() {
      const res = await axios.get(`http://localhost:5000/products/${this.$route.params.id}`);
      this.product = res.data.name_product;
      this.description = res.data.description_product;
      this.price = res.data.price_product;
      this.path = res.data.image_product;
    },
    getImgPath() {
      try {
        return require(`@/assets/Images/${this.path}.png`);
      } catch (error) {
        console.log(error);
      }
    },
    async addToCart() {
      try {
        await axios.post(`http://localhost:5000/basket`, {
          id_product: this.$route.params.id,
          sessionId_basket: window.$cookies.get("sessionId")
        });
        if (window.$cookies.get("cart") == null) {
          window.$cookies.set("cart", 1);
        } else {
          window.$cookies.set("cart", (parseInt(window.$cookies.get("cart")) + 1));
        }
        this.inCart = true;
      } catch (error) {
        console.log(error);
      }
    },
    checkout() {
      this.$router.push("/basket");
    },
    continueShop() {
      this.$router.push("/");
    }
  },
  beforeMount() {
    this.getProduct();
  }
}
</script>

<style scoped>
.cad {
  width: 15px;
}

.cart {
  font-size: medium;
  color: #221F1F;
}

.product-info {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #221F1F;
  padding-top: 10px;
  text-align: left;
  align-items: baseline;
  margin-left: 55%;
}

.img {
  width: 30%;
  margin-left: 15%;
  position: relative;
  z-index: 1;
  float: left;
  display: block;
}

.button {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 5px;
  text-transform: uppercase;
  background-color: #221F1F;
  width: 30%;
  height: 30%;
  border: 3%;
  padding: 15px;
  color: white;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin-right: 1%;
  border-radius: 2%;
  margin-top: 10px;
}

.button:hover {
  color: #fc9a00;
  text-decoration: none;
}

.product-container {
  box-sizing: border-box;
  margin: 150px 0px 112px 0px;
  height: 50px;
  background-color: white;
  color: #1E3551;
}




</style>
