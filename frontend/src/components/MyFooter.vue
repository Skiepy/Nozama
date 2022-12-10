<template>
    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col-sm-4 col-md-3 item">
                        <h3>ADMIN</h3>
                        <ul>
                            <li><a><router-link class="rl" to="/admin">ADMIN</router-link></a></li>
                        </ul>
                    </div>

                    <div class="col-sm-4 col-md-3 item">
                        <h3>TEXTE 2</h3>
                    </div>

                    <div class="col-sm-4 col-md-3 item">
                        <h3>TEXTE 3</h3>
                        <ul>
                            <li><a><router-link to="/about">ABOUT US</router-link></a></li>
                        </ul>
                    </div>

                    <div id="bottom-img">
                        <img src="@/assets/Images/nozama.png" alt="lo" id="img">
                    </div>
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
    width: 120px;
    margin-left: 20px;
}

footer {
    background-color : green;
}
</style>