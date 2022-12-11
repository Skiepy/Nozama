<template>
    <header>
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <div id="headerbarAll">

            <div class="dropdown"> <!-- 1 -->
                <button class="bloc-top" @click="scroll">
                    <span>Products</span>
                    <img src="@/assets/Images/hamburger.png">
                </button>
                <div class="bloc-links">
                    <ul>
                        <li>
                            <a href="#">The Classic</a>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#">Slippers</a>
                            <a href="#"></a>
                        </li>
                        <li>
                            <a href="#">Fancy</a>
                            <a href="#"></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="headerbar">

                <div id="logo"> <!-- 2 -->
                    <img src="@/assets/Images/nozama.png" alt="lo" id="logo">
                </div>

                <div id="searchbar"> <!-- 3 -->
                    <form class="example" action="/action_page.php" style="margin:auto;">
                        <input type="text" placeholder="Search.." name="search2">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>

                <div id="cart"> <!-- 4 -->
                    <img src="@/assets/Images/caddy_blanc.png" alt="lo" id="cart">
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

        };
    },

    methods: {
        async scroll() {
            const dropdown = document.querySelector(".dropdown");
            const btnDrop = document.querySelector(".bloc-top");
            let toggleIndex = 10;

            btnDrop.addEventListener('click', () => {

                if (toggleIndex == 0) {
                    dropdown.style.height = `${dropdown.scrollHeight}px`;
                    toggleIndex = 1;
                    console.log("down");
                }
                else if (toggleIndex == 1) {
                    // dropdown.style.height = `${btnDrop.scrollHeight}px`;
                    dropdown.style.height = `50px`;
                    toggleIndex = 0;
                    console.log("up");
                }
                else {
                    toggleIndex = 0;
                }
            })
        }
    },

}

</script>

<style scoped>
/* general header */
header {
    z-index: 1;
    position: sticky;
    width: 100%;
    height: 60px;
    background-color: #131921;
    overflow: hidden;
    position: sticky;
    top: 0;
    font: 12px Arial;
}

/* the entire header bar*/
#headerbarAll {
    display: flex;
    justify-content: space-between;
}

/* header bar ( logo / search / panier) */
#headerbar {
    display: flex;
    width:100%;
    justify-content: space-between;
    padding-top: 8px;
}

/* nav */
.dropdown {
    max-width: 200px;
    height: 63px;
    color: #f1f1f1;
    background: #ffb237;
    transition: height 0.4s ease-in-out;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.bloc-top {
    padding: 20px;
    display: block;
    width: 100%;
    border: none;
    outline: none;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    background: #ffb237;
    color: #f1f1f1;
    cursor: pointer;
    border-radius: 5px;
}

.bloc-top img {
    width: 20px
}

.bloc-links {
    padding: 0 22px;
    text-align: left;
}

.bloc-links li {
    list-style-type: none;
    padding: 5px 0;
}

.bloc-links li a {
    text-decoration: none;
    font-size: 18px;
    color: #f1f1f1;
    margin-left: 5px;
}

.bloc-links li a:hover {
    color: rgb(60, 60, 60);
}

.bloc-links li:last-child {
    padding-bottom: 25px;
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
}

form.example input[type=text] {
    padding: 10px;
    padding-left: 20px;
    font-size: 17px;
    border: 1px solid grey;
    float: left;
    width: 500px;
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