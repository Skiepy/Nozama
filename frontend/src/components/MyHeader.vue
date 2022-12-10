<template>
    <div id="logo">
        <img src="@/assets/Images/nozama.png" alt="lo" id="logo">
    </div>
    <header>
        <nav id="header-nav">
            <div id="tab-links">
                <router-link class="rl" to="/">HOME </router-link> |
                <router-link class="rl" to="/about">ABOUT </router-link> |
                <router-link class="rl" to="/admin">ADMIN </router-link>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
  name: 'MyHeader',

  methods: {
  },

}

</script>

<style scoped>

</style>