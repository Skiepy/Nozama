<template>
  <MyHeader></MyHeader>

  <div id="top">
    <div v-if="(nbProducts == 0)" id="emptyBasket">
      <img src="@/assets/Images/emptyCart.png" id="emptyBasketImage">
      <h1>Your cart is empty</h1>
    </div>
    <div v-else>
      <h1> Your Basket</h1>
      <div id="divtable">
        <table>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
            <tr v-for="product in myProducts" :key="product.id_product">
              <td>{{ product.name_product }}</td>
              <td>{{ product.price_product }}</td>
              <td><input v-model.number="product.quantity" type="number" id="quantity" min="1"></td>
              <td><button @click="deleteProduct(product.id_product)">Delete</button></td>
            </tr>
        </table>
        <div id="buttons">
          <button id="basket" style="background-color: rgba(34, 255, 0, 0.405)" @click="goToCheckout()">Go To
            Payment</button>
        </div>
      </div>
    </div>
  </div>

  <MyFooter></MyFooter>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue';
import MyHeader from '@/components/MyHeader.vue';
import axios from 'axios';

export default {
  name: "Basket",
  data() {
    return {
      quantity: 1,
      nbProducts: 0,
      basket: [],
      myBasket: [],
      myProducts: [],
      toDelete: []
    };
  },
  methods: {
    async getSessionProducts() {
      try {
        const response = await axios.get(`http://localhost:5000/basket`);
        this.basket = response.data;
        let cpt = 0;
        for (let index = 0; index < this.basket.length; index++) {
          if (this.basket[index].sessionId_basket == window.$cookies.get("sessionId")) {
            this.myBasket[cpt] = this.basket[index];
            cpt++;
          }
        }
        this.nbProducts = this.myBasket.length;
        this.getProducts();
      }
      catch (error) {
        console.log(error);
      }
    },
    async getProducts() {
      try {
        for (let i = 0; i < this.myBasket.length; i++) {
          const response = await axios.get(`http://localhost:5000/products/${this.myBasket[i].id_product}`);
          this.myProducts[i] = response.data;
          this.myProducts[i].quantity = 1;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProduct(id) {
      try {
        let cpt = 0;
        for (let index = 0; index < this.basket.length; index++) {
          if (this.basket[index].sessionId_basket == window.$cookies.get("sessionId") && this.basket[index].id_product == id) {
            this.toDelete[cpt] = this.basket[index];
            await axios.delete(`http://localhost:5000/basket/${this.toDelete[cpt].id_basket}`);
            cpt++;
            break;
          }
        }
        window.$cookies.set("cart", parseInt(window.$cookies.get("cart"))-1);
        window.location.reload();
      }
      catch (error) {
        console.log(error);
      }
    },
    goToCheckout() {
      try {
        let total = 0;
        for (let i = 0; i < this.myProducts.length; i++) {
          total += (this.myProducts[i].price_product * this.myProducts[i].quantity);
        }
        this.$router.push(`/checkout/${total}`);
      } catch (error) {
        console.log(error);
      }
    }
  },
  beforeMount() {
    this.getSessionProducts();
  },
  components: { MyHeader, MyFooter }
}
</script>

<style scoped>
#top {
  margin-top: 100px;
  margin-bottom: 40px;
}

#emptyBasket {
  padding-bottom: 50px;
}

#emptyBasketImage{
  padding: 100px;
  width: 40%;
  height: 40%;
}

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

/* table */
#divtable {
  padding-left: 25%;
  padding-right: 25%;
  padding-bottom: 40px;
}

table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 15px rgba(64, 64, 64, 0.411);
  border-radius: 12px 12px 12px 12px;
  overflow: hidden;
}

td,
th {
  padding: 15px 15px;
  text-align: center;
}

th {
  background-color: #ffb237;
  color: #fafafa;
  font-family: 'Open Sans', Sans-serif;
  font-weight: 200;
  text-transform: uppercase;
}

tr {
  background-color: #fafafa;
  font-family: 'Montserrat', sans-serif;
}

tr:nth-child(even) {
  background-color: #eeeeee;
}

td button {
  color: rgb(0, 170, 255);
}

button {
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

#basket {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0px 5px rgba(64, 64, 64, 0.411);
}

#buttons {
  padding-top: 40px;
  padding-bottom: 100px;
}

#quantity {
  width: 30px;
}
</style>