<template>

  <head>
    <title class="title">Vue Mastery</title>
  </head>

  <body>
    <div id="app">
      <div class="nav-bar"></div>

      <div class="cart">Cart({{ cart }})
<<<<<<< Updated upstream
        <img src="@/assets/Images/caddy.webp" alt="" class="cad">
      </div>
      <div class="cadre">
        <div class="product-display">
          <div class="product-container">
=======
        <img src="@/assets/Images/caddy.webp" alt="" class="cad"></div>
      <div class="cadre">
      <div class="product-display">
        <div class="product-container">
>>>>>>> Stashed changes
            <img src="@/assets/Images/crocsbleu.webp" alt="" class="img">
            <!-- <img src="@/assets/Images/crocsviolet.webp" alt="" class="img"> -->
            <div class="product-info">
              <h1>{{ product }}</h1>
              <p v-if="onSale">{{ saleMessage }}</p>
              <p v-if="inStock">In Stock</p>
              <p v-else>Out of Stock</p>
              <ul>
                <li v-for="detail in details" class="list">{{ detail }}</li>
              </ul>
              <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                class="color-circle" :style="{ backgroundColor: variant.color }">
              </div>
              <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock"
                v-on:click="addToCart">Add to Cart</button>
              <button class="button" @click="removeFromCart">Remove Item</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
  
<style scoped>
<<<<<<< Updated upstream
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
  margin-left: 500px;
}

.img {
  width: 500px;
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
  width: 10%;
  border: 2%;
  padding: 15px;
  color: white;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 2%;
  margin-top: 10px;
=======
  .cad{
    width: 15px;
  }
  .cart{
    font-size: medium;
    color: #221F1F;
  }
  .product-info{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #221F1F;
    padding-top: 10px;
    margin-left: 500px;
  }
  .img{
    width: 500px;
    position: relative;
    z-index: 1;
    float: left;
    display: block;
  }
  .button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 5px;
    text-transform: uppercase;
    background-color: #221F1F;
    width: 10%;
    border : 2%;
    padding: 15px;
    color:white;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;  
    margin-left: 10px;  
    border-radius : 2%;
    margin-top: 10px;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

.list {
  /* padding-top: 20px; */
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #fc9a00;
=======
.list{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color:#fc9a00;
>>>>>>> Stashed changes
  text-align: left;
  align-items: baseline;
  margin-left: 42%;
}

.cadre {
  position: relative;
  background: #f4f4f1;
  max-width: 2000px;
  margin: 0 auto 100px;
<<<<<<< Updated upstream
  /* padding: 45px; */
  /* text-align: center; */
  border-radius: 1%;
=======
  border-radius : 1%;
>>>>>>> Stashed changes
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 5%;
  margin-right: 5px;
<<<<<<< Updated upstream
  /* margin-left: 5px; */
  box-sizing: border-box;
=======
  box-sizing:border-box;
}
* {
  box-sizing:border-box;
>>>>>>> Stashed changes
}
</style>

<script>
export default {
  props: [
<<<<<<< Updated upstream
    'id'
  ],
  data() {
    return {
      cart: 0,
      product: 'CROCS Classical',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      inStock: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_blue.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
      ],
      onSale: true
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    // solution
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1
      }
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    // solution
    updateImage(variantImage) {
      this.image = variantImage
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].image
      },
      inStock() {
        return this.variants[this.selectedVariant].quantity
      },
      // solution
      saleMessage() {
        if (this.onSale) {
          return this.brand + ' ' + this.product + ' is on sale.'
        }
        return ''
      }
      // solution
    }
=======
      'id'
  ],
  data() {
      return {
          cart: 0,
          product: 'CROCS Classical',
          brand: 'Vue Mastery',
          selectedVariant: 0,
          inStock: true,
          details: ['50% cotton', '30% wool', '20% polyester'],
          variants: [
            { id: 2234, color: 'green', image:  './assets/images/socks_blue.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
          ],
          onSale: true
      }
  },
  methods: {
      addToCart() {
          this.cart += 1
      },
      // solution
      removeFromCart() {
          if (this.cart >= 1) {
              this.cart -= 1
          }
        },
      updateVariant(index) {
        this.selectedVariant = index
      },
      // solution
      updateImage(variantImage) {
          this.image = variantImage
      },
      computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      // solution
      saleMessage() {
          if (this.onSale) {
              return this.brand + ' ' + this.product + ' is on sale.'
          }
          return ''
      }
      // solution
  }
>>>>>>> Stashed changes
  }
}
</script>
