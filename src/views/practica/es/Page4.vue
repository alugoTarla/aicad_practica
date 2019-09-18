<template>
  <div class="page4">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page4/Section";
import Section1 from "@/components/practica/page4/Section1";
import Section2 from "@/components/practica/page4/Section2";
import Section3 from "@/components/practica/page4/Section3";
import Section4 from "@/components/practica/page4/Section4";
import Section5 from "@/components/practica/page4/Section5";

export default {
  name: "page4",
  components: {
    Section
    , Section1
    , Section2
    , Section3
    , Section4
    , Section5
  },
  head: {
    title: {
      inner: "Contratar becarios en prácticas"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Todo lo que debes saber sobre convenios de prácticas en empresas y la cotización a la seguridad social de becarios. Solicita con nosotros asesoría y evita inconvenientes ante una inspección.", id: 'desc' }, 
      
      { itemprop: 'name', content: "Contratar becarios en prácticas" },
      { itemprop: 'description', content: "Todo lo que debes saber sobre convenios de prácticas en empresas y la cotización a la seguridad social de becarios. Solicita con nosotros asesoría y evita inconvenientes ante una inspección." },
      
      { property: 'og:title', content: "Contratar becarios en prácticas" },
      { property: 'og:description', content: "Todo lo que debes saber sobre convenios de prácticas en empresas y la cotización a la seguridad social de becarios. Solicita con nosotros asesoría y evita inconvenientes ante una inspección." },
    ],
    // link: [
    //   { rel: 'canonical', href: '/practica/', id: 'canonical' },
    // ],
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