<template>
  <div class="wrapper">
    <div id="app">
      <Menu></Menu>
      <Header></Header>      
      <router-view ></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Menu
  }
};
</script>

<style lang="scss">
@import "assets/font-awesome-4.7.0/css/font-awesome.min.css";
</style>