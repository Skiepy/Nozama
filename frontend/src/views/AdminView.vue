<template>
    <div class="admin">
        <h1>This is the admin page</h1>
    </div>

    <form id="form">

        <label for="Pname">Product name :</label><br>
        <input type="text" id="Pname" v-model="Pname"><br>

        <label for="Description">Description :</label><br>
        <input type="text" id="Description" v-model="Description"><br>

        <label for="Price">Price (EUR):</label><br>
        <input type="text" id="Price" v-model="Price"><br>

        <label for="Image">Image :</label><br>
        <input type="text" id="Image" v-model="Image"><br>


        <input type="submit" value="Submit" @click="createNewProduct()">

    </form>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            file: [],
            Pname: "",
            Description: "",
            Price: "",
            Image: ""
        }
    },
    methods: {
        async createNewProduct() {
            try {
                await axios.post("http://localhost:5000/products", {
                    name_product: this.Pname,
                    description_product: this.Description,
                    price_product: this.Price,
                    image_product: this.Image
                });
                console.log("New product added");
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>