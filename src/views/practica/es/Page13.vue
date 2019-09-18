<template>
  <div class="page13">
    <div class="wrapper">
      <Section />
      <Section1 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page13/Section";
import Section1 from "@/components/practica/page13/Section1";

export default {
  name: "page13",
  components: {
    Section
    , Section1
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