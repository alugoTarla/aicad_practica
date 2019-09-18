<template>
  <div class="page14">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from "@/components/practica/page14/Section1";
import Section2 from "@/components/practica/page14/Section2";
import Section3 from "@/components/practica/page14/Section3";
import Section4 from "@/components/practica/page14/Section4";
import Section5 from "@/components/practica/page14/Section5";

export default {
  name: "page14",
  components: {
    Section1
    , Section2
    , Section3
    , Section4
    , Section5
  }, 
  head: {
    title: {
      inner: "Arrange an insurance for students and interns"
    },
  },
  mounted() {
    this.$i18n.locale = "en";
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/css/master-postgrado/bootstrap.min.css";
@import "../../../assets/css/master-postgrado/main.css";
@import "../../../assets/css/stlProyecto.css";
</style>