<template>
  <MyHeader></MyHeader>

  <head>
    <title class="title">Vue Mastery</title>
  </head>

  <body>
    <div id="app">
      <div class="nav-bar"></div>

      <div class="cart">Cart({{ cart }})
        <img src="@/assets/Images/caddy.webp" alt="" class="cad">
      </div>
      <div class="cadre">
        <div class="product-display">
          <div class="product-container">
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
    continueShop(){
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
  margin-left: 60%;
}

.img {
  width: 30%;
  margin-left: 10%;
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
  width: 22%;
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
  margin-bottom: 100px;
  margin-left: 20px;
  padding-bottom: 300px;
  height: 50px;
  background-color: white;
  color: #1E3551;
}

.list {
  /* padding-top: 20px; */
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #fc9a00;
  text-align: left;
  align-items: baseline;
}

.cadre {
  position: relative;
  background: #f4f4f1;
  width: 100%;
  height: 120%;
  margin: 0 auto 100px;
  /* padding: 45px; */
  /* text-align: center; */
  border-radius: 1%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 5%;
  margin-right: 5px;
  /* margin-left: 5px; */
  box-sizing: border-box;
}
</style>
