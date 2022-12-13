<template>
  <MyHeader></MyHeader>

  <div id="top">
    <div v-if="(nbProducts == 0)">
      No products available, we apologize for the inconvenience.
    </div>
    <div v-else>
      <div v-for="product in myProducts">
        This item {{ product.id_product }} is in the basket.
      </div>
    </div>
  </div>

  <h1> Your Basket</h1>
  <div id="divtable">
    <table>
      <tr>
        <th>#</th>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Delete</th>
      </tr>

      <tr>
        <td>{{ number }}</td>
        <td>{{ product }}</td>
        <td>{{ price }}</td>
        <td><input v-model.number="quantity" type="number" id="quantity" min="1" ></td>
        <td><button>Delete</button></td>
      </tr>

      <tr>
        <td>{{ number }}</td>
        <td>{{ product }}</td>
        <td>{{ price }}</td>
        <td><input v-model.number="quantity" type="number" id="quantity" min="1" ></td>
        <td><button>Delete</button></td>
      </tr>

      <tr>
        <td>{{ number }}</td>
        <td>{{ product }}</td>
        <td>{{ price }}</td>
        <td><input v-model.number="quantity" type="number" id="quantity" min="1" ></td>
        <td><button>Delete</button></td>
      </tr>

    </table>
  </div>

  <div id="buttons">
    <button id="basket" style="background-color: rgba(34, 255, 0, 0.405)">Purchase items</button>
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
      number: 1,
      product: "Crocs-example",
      price: "$10",
      quantity: 5,

      nbProducts: 0,
      products: [],
      myProducts: []
    };
  },
  methods: {
    async getSessionProducts() {
      try {
        const response = await axios.get(`http://localhost:5000/basket`);
        this.products = response.data;
        let cpt = 0;
        for (let index = 0; index < this.products.length; index++) {
          if (this.products[index].sessionId_basket == window.$cookies.get("sessionId")) {
            this.myProducts[cpt] = this.products[index];
            cpt++;
          }
        }
        this.nbProducts = this.myProducts.length;
      }
      catch (error) {
        console.log(error);
      }
    },
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
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 40px;
}

table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 15px rgba(64, 64, 64, 0.411);
  border-radius: 12px 12px 12px 12px;
  overflow: hidden;
}

td,th {
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

#basket{
  margin : 10px;
  padding : 10px;
  border-radius : 5px;
  box-shadow: 0 0px 5px rgba(64, 64, 64, 0.411); 
}

#buttons{
  padding-bottom : 100px;
}

#quantity{
  width : 30px;
}

</style>