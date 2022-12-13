<template>
  <div class="cont">
    <div class="all">
      <img :src="getImgPath()" alt="" class="img">
      <div class="allprod">
        <div class="text">
          <div class="product2">
            {{ this.productName }}
          </div>
          <div class="product">
            {{ this.productPrice }} $
          </div>
        </div>
      </div>
    </div>
  </div>
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
      path: ""
    }
  },
  methods: {
    async getProduct() {
      const res = await axios.get(`http://localhost:5000/products/${this.id}`);
      this.productName = res.data.name_product;
      this.productPrice = res.data.price_product;
      this.path = res.data.image_product;
      
    },
    getImgPath() {
      try {
        return require(`@/assets/Images/${this.path}.png`);
      } catch (error) {
        console.log(error);
      }
    }
  },
  beforeMount() {
    this.getProduct();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap%27');

.cont {
  text-align: center;
}

.all {
  width: 25%;
  height: 80%;
  border-radius: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: white;
}

.text {
  margin-top: 2%;
  margin-bottom: 5%;
  margin-left: 2%;
  margin-right: 5%;
}

.product {
  font-family: 'Rubik', sans-serif;
  color: #fc9a00;
  font-weight: bold;
  text-align: right;
  margin-top: 5%;
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 2%;
  align-items: baseline;
}

.product2 {
  font-family: 'Rubik', sans-serif;
  text-transform: uppercase;
  color: #221F1F;
  /* text-align: left; */
  float: left;
  align-items: baseline;
  margin-bottom: 2%;
}

.product1 {
  font-family: 'Rubik', sans-serif;
  color: #fc9a00;
  float: right;
  align-items: right;
}

.img {
  width: 90%;
  margin-left: 4%;
  position: relative;
  z-index: 1;
  float: left;
  display: block;
}
</style>