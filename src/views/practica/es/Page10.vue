<template>
  <div class="page10">
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
import Section from "@/components/practica/page10/Section";
import Section1 from "@/components/practica/page10/Section1";
import Section2 from "@/components/practica/page10/Section2";
import Section3 from "@/components/practica/page10/Section3";
import Section4 from "@/components/practica/page10/Section4";

export default {
  name: "page10",
  components: {
    Section
    , Section1
    , Section2
    , Section3
    , Section4
  }, 
  head: {
    title: {
      inner: "Contratar becarios extranjeros"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Contrata becarios de todas partes del mundo. Becarios de Francia, Alemania, Inglaterra, Polonia o Italia.  Publica una oferta de práctica y encuentra becarios. Somos una agencia para contratar becarios extranjeros y estudiantes europeos.", id: 'desc' }, 
      
      { itemprop: 'name', content: "Contratar becarios extranjeros" },
      { itemprop: 'description', content: "Contrata becarios de todas partes del mundo. Becarios de Francia, Alemania, Inglaterra, Polonia o Italia.  Publica una oferta de práctica y encuentra becarios. Somos una agencia para contratar becarios extranjeros y estudiantes europeos." },
      
      { property: 'og:title', content: "Contratar becarios extranjeros" },
      { property: 'og:description', content: "Contrata becarios de todas partes del mundo. Becarios de Francia, Alemania, Inglaterra, Polonia o Italia.  Publica una oferta de práctica y encuentra becarios. Somos una agencia para contratar becarios extranjeros y estudiantes europeos." },
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