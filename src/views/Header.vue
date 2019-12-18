<template>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">

    #nav {
  padding: 20px;
  background: aquamarine;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin-left: 20px;
    font-size: 20px;

    &.router-link-exact-active {
      color: green;
    }
  }
}

</style>