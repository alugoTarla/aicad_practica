<template>
  <div class="page16">
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
import Section from "@/components/practica/page16/Section";
import Section1 from "@/components/practica/page16/Section1";
import Section2 from "@/components/practica/page16/Section2";
import Section3 from "@/components/practica/page16/Section3";
import Section4 from "@/components/practica/page16/Section4";

export default {
  name: "page15",
  components: {
    Section
    , Section1
    , Section2
    , Section3
    , Section4
  }, 
  head: {
    title: {
      inner: "Agencia de Work and Travel"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Si buscas una agencia partner para expandir tus servicios, colabora con nosotros y ofrece a tus clientes las mejores ofertas de prácticas en España. Incluye a España como destino para tus ofertas. Colabora con agencias work and travel.", id: 'desc' }, 
      
      { itemprop: 'name', content: "Agencia de Work and Travel" },
      { itemprop: 'description', content: "Si buscas una agencia partner para expandir tus servicios, colabora con nosotros y ofrece a tus clientes las mejores ofertas de prácticas en España. Incluye a España como destino para tus ofertas. Colabora con agencias work and travel." },
      
      { property: 'og:title', content: "Agencia de Work and Travel" },
      { property: 'og:description', content: "Si buscas una agencia partner para expandir tus servicios, colabora con nosotros y ofrece a tus clientes las mejores ofertas de prácticas en España. Incluye a España como destino para tus ofertas. Colabora con agencias work and travel." },
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