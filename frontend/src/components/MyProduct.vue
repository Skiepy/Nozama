<template>
    <div class="cont">
    <div class="all">
    <img src="@/assets/Images/crocsviolet.webp" alt="" class="img">
    <div class="product">
    Product: {{this.productName}}
</div>
    <div class="product">
    Description: {{this.productDescription}}
</div>
<div class="product1">
    Price: {{this.productPrice}} $
</div>
</div>
</div>
</template>

<script>
export default {
    props: [
        'id'
    ],
    data() {
        return {
            productName : "Test",
            productDescription:  "Desc",
            productPrice : "20"
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.cont{
  text-align: center;
}
.all{
    display: inline-block;
    position: relative;
    background:#f4f4f1;
    max-width: 360px;
    width: 1000px;
    margin: 0 auto 100px;
    padding: 45px;
    padding-bottom: 5%;
    padding-top: 5%;
    text-align: center;
    border-radius : 2%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 5%;
    margin-bottom: 5%;
}
.product{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #221F1F;
    padding-top: 10px;
    margin-right: 300px;
    float: right;
    align-items: right;
}
.product1{
    font-family:Arial, Helvetica, sans-serif;
    color: #fc9a00;
    margin-left: 300px;
    float: right;
    align-items: right;
}
.img{
    float: left;
    width: 400px;
    position: relative;
    float: left;
    display: block;
}
</style>