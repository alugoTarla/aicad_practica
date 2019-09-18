<template>
  <div class="page15">
    <div class="wrapper">
      <Section1/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from "@/components/practica/page15/Section1";

export default {
  name: "page15",
  components: {
    Section1
  }, 
  head: {
    title: {
      inner: "Buscador de ofertas de practicas"
    },
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/master-postgrado/bootstrap.min.css";
@import "../../assets/css/master-postgrado/main.css";
@import "../../assets/css/stlProyecto.css";
</style>