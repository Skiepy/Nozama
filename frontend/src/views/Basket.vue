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
</style>