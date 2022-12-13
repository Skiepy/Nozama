<template>

  <button @click="goToDetails()" id="buttondiv">
  <div class="all">
    <img :src="getImgPath()" alt="" class="img">

    <div class="allprod">
      
      <div id="text">

        <div class="productPrice">
          ${{ this.productPrice }}
        </div>

        <div class="productName">
          <b>{{ this.productName }}</b>
        </div>

      </div>

    </div>
  </div>
  </button>
  
</template>

<script>
import axios from 'axios';
export default {
  props: {
    id: Number
  },
  data() {
    return {
      productName: "",
      productPrice: "",
      path: "",
      // id: ""
    }
  },
  methods: {
    async getProduct() {
      const res = await axios.get(`http://localhost:5000/products/${this.id}`);
      this.productName = res.data.name_product;
      this.productPrice = res.data.price_product;
      this.path = res.data.image_product;
      this.id = res.data.image_product;

    },
    getImgPath() {
      try {
        return require(`@/assets/Images/${this.path}.png`);
      } catch (error) {
        console.log(error);
      }
    },
    goToDetails() {
      this.$router.push(`/product/${this.id}`);
    }
  },
  beforeMount() {
    this.getProduct();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap%27');

.all {
  width: 250px;
  height: 200px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  background-color: white;
}

#text {
  text-align: left;
  margin: 5px;
  text-align: left;
}

.productPrice {
  font-family: 'Rubik', sans-serif;
}

.productName {
  font-family: 'Rubik', sans-serif;
  font-size: 13px;
}

.img {
  width: 150px;
}

button {
  color : #232F3E;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
#buttondiv {
  text-align: left;
}

button:hover {
  color: #ffb237;
}
</style>