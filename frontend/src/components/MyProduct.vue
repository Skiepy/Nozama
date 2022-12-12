<template>
    <div class="cont">
    <div class="all">
    <img src="@/assets/Images/crocs_clog/clog_bleu.png" alt="" class="img">
    <div class="allprod">
        <div class="text">
    <div class="product">
    Product: 
</div><div class="product2">
    {{this.productName}}
</div>
    <div class="product">
    Description: 
</div>
<div class="product2">
    {{this.productDescription}}
</div>
<div class="product">
    Price: 
</div>
<div class="product1">
    {{this.productPrice}} $
</div>
</div>
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
  width: 100%;
  height: 70%;
  border-radius: 60px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* width: 1200px;
  height: 370px;
  position: absolute;
  background: #f4f4f1;
  border-radius: 60px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-right: 5px; */
}
.allprod{
  /* width: 500px;
  height: 300px;
  border-radius: 60px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-right: 4%;
  margin-top: 2%;
  padding-bottom: 2%;
  box-sizing: border-box; */
}
/* }
.text{
  margin-top: 2%;
}
.product{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #221F1F;
  font-weight: bold;
  padding-top: 5%;
  text-align: left;
  align-items: baseline;
  margin-left: 42%;
}

.product2{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #221F1F;
  padding-top: 5%;
  text-align: left;
  align-items: baseline;
  margin-left: 42%;
}
.product1{
    font-family:Arial, Helvetica, sans-serif;
    color: #fc9a00;
    margin-left: 500px;
    padding-left: 6%;
    float: right;
    align-items: right;
}
.img{
  width: 600px;
  position: relative;
  z-index: 1;
  float: left;
  display: block;
}  */

</style>