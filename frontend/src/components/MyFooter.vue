<template>
    <div class="footer-clean">
        <footer>
            <div class="container">

                <div class="element">
                    <h3>Our Products</h3>
                    <ul>
                        <li>
                            <RouterLink class="link" :to="{ name: 'product', params: { id: 16 } }">Classics</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="link" :to="{ name: 'product', params: { id: 18 } }">Slippers</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="link" :to="{ name: 'product', params: { id: 23 } }">Fancy</RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="element">
                    <h3>Check your cart</h3>
                    <ul>
                        <li>
                            <router-link to="/basket"><a>Your cart</a></router-link>
                        </li>
                    </ul>
                </div>

                <div class="element">
                    <router-link to="/"><img src="@/assets/Images/nozama.png" alt="lo" id="img"></router-link>
                </div>

            </div>
        </footer>
    </div>

</template>

<script>
export default {
    name: 'MyFooter',

    methods: {
    },

}
</script>

<style scoped>
#img {
    width: 100px;
    padding-top : 50px;
}

footer {
    color: #fff;
    background-color: #232F3E;
}

.container {
    display: flex;
    margin-left : 28%;
    margin-right : 28%;
}
.element {
    padding: 0px 20px;
    width : 200px;
    justify-content : space-between;
}

.element ul {
    padding: 20px;
    padding: 0;
    list-style: none;
}

.element ul li a {
    color: white;
    text-decoration: none;
}
.element ul li a:hover {
    color: #aeb6be;
}

</style>