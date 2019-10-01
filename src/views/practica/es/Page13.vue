<template>
  <div class="page13">
    <div class="wrapper">
      <Section1 />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page13/Section";
import Section1 from "@/components/practica/page13/Section1";
import Section2 from "@/components/practica/page13/Section2";
import Section3 from "@/components/practica/page13/Section3";
import Section4 from "@/components/practica/page13/Section4";

export default {
  name: "page13",
  components: {
    Section
    , Section1
    , Section2
    , Section3
    , Section4
  }, 
  head: {
    title: {
      inner: "Preguntas frecuentes de empresas"
    },
  },
  mounted() {
    this.$i18n.locale = "es";
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/css/master-postgrado/bootstrap.min.css";
@import "../../../assets/css/master-postgrado/main.css";
@import "../../../assets/css/stlProyecto.css";
</style>