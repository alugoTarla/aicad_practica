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

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #7DD2D9;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #009090;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #007c7c;
  }
@import "assets/font-awesome-4.7.0/css/font-awesome.min.css";
@import "assets/css/master-postgrado/bootstrap.min.css";
@import "assets/css/master-postgrado/main.css";
@import "assets/css/stlProyecto.css";
</style>