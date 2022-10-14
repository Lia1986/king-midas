<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./layout/Header.vue";

export default {
  name: "App",

  data() {
    return {};
  },

  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "./assets/scss/base";
</style>
