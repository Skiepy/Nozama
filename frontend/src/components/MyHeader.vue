<template>
    <header>
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <div id="headerAll">

            <div class="dropdown"> <!-- 1 -->
                <button class="bloc-top" @mouseenter="scrolldown" @mouseleave="scrollup">
                    <span>Products</span>
                    <img src="@/assets/Images/hamburger.png">
                </button>
                <div class="bloc-links" @mouseenter="scrolldown" @mouseleave="scrollup">
                    <ul>
                        <li>
                            <a href="#">Classic</a>
                        </li>
                        <li>
                            <a href="#">Slippers</a>
                        </li>
                        <li>
                            <a href="#">Fancy</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="headerbar">

                <div id="logo"> <!-- 2 -->
                    <router-link to="/"><img src="@/assets/Images/nozama.png" alt="lo" id="logo"></router-link>
                </div>

                <div id="searchbar"> <!-- 3 -->
                    <form class="example" style="margin:auto;">
                        <input type="text" placeholder="Search.." name="search" style="outline: none">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>

                <div id="cart"> <!-- 4 -->
                    <router-link to="/basket"><img src="@/assets/Images/caddy_blanc.png" alt="lo" id="cart"></router-link>
                </div>

            </div>
        </div>

    </header>
</template>

<script>

export default {
    name: 'MyHeader',

    data() {
        return {
            toggleIndex: false,
        };
    },

    methods: {
        scrolldown() {
            const dropdown = document.querySelector(".dropdown");
            dropdown.style.height = `155px`;
        },
        scrollup() {
            const btnDrop = document.querySelector(".dropdown");
            btnDrop.style.height = `67px`;
        }
    },

}

</script>

<style scoped>
/* general header */

header {
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
}

/* the entire header bar*/
#headerAll {
    display: flex;
}

/* header bar ( logo / search / panier) */
#headerbar {
    height: 55px;
    background-color: #131921;
    font: 12px Arial;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 12px;
    padding-right: 20px;
}

/* nav */
.dropdown {
    max-width: 200px;
    height: 67px;
    color: #f1f1f1;
    background: #ffb237;
    transition: height 0.4s ease-in-out;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.bloc-top {
    padding: 20px;
    display: block;
    height: 67px;
    width: 100%;
    border: none;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    background: #ffb237;
    color: #f1f1f1;
    cursor: pointer;
}

.bloc-top:hover {
    background: #e7991b;
}

.bloc-top img {
    width: 20px
}

.bloc-links {
    padding: 0 22px;
    text-align: left;
    justify-content: left;
    align-items: left;
}

.bloc-links ul {
    margin: 0px;
    padding: 0px 40px 0px 0px;
}

.bloc-links li {
    padding-top: 5px;
    list-style-type: none;
    text-align: left;
    justify-content: left;
    align-items: left;
}

.bloc-links li a {
    text-align: left;
    justify-content: left;
    align-items: left;
    text-decoration: none;
    font-size: 18px;
    color: #f1f1f1;
}

.bloc-links li a:hover {
    color: rgb(60, 60, 60);
}

.bloc-links li:last-child {
    padding-bottom: 20px;
    border-radius : 20px;
}

/* logo */
#logo {
    width: 120px;
    margin-left: 10px;
    margin-top: 2px;
}

/* search */
#searchbar {
    box-sizing: border-box;
    padding-right: 8%;
    width: 80%;
    padding-left: 12%;
}

form.example input[type=text] {
    padding: 10px;
    padding-left: 20px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 60%;
    background: #f1f1f1;
    border-radius: 30px 0 0 30px;
}

form.example button {
    float: left;
    width: 60px;
    padding: 10px;
    background: #ffb237;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
    border-radius: 0 30px 30px 0;
}

form.example button:hover {
    background: #fc9a00;
}

form.example::after {
    content: "";
    clear: both;
    display: table;
}

/* panier */
#cart {
    width: 50px;
    padding-right: 10px;
}
</style>