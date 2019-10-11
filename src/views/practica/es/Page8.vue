<template>
  <div class="page8">
    <div class="wrapper">
      <Section1 />
      <Section />
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
import Section from "@/components/practica/page8/Section";
import Section1 from "@/components/practica/page8/Section1";
import Section2 from "@/components/practica/page8/Section2";
import Section3 from "@/components/practica/page8/Section3";
import Section4 from "@/components/practica/page8/Section4";
import Section5 from "@/components/practica/page8/Section5";

export default {
  name: "page8",
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
      inner: "Países para hacer prácticas en empreasas Erasmus"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Si te preguntas en dónde puedes hacer prácticas profesionales en empresas o en qué países del mundo puedes hacer prácticas remuneradas, descubre los destinos que te ofrece AICAD Business School. ", id: 'desc' }, 
      
      { itemprop: 'name', content: "Países para hacer prácticas en empreasas Erasmus" },
      { itemprop: 'description', content: "Si te preguntas en dónde puedes hacer prácticas profesionales en empresas o en qué países del mundo puedes hacer prácticas remuneradas, descubre los destinos que te ofrece AICAD Business School. " },
      
      { property: 'og:title', content: "Países para hacer prácticas en empreasas Erasmus" },
      { property: 'og:description', content: "Si te preguntas en dónde puedes hacer prácticas profesionales en empresas o en qué países del mundo puedes hacer prácticas remuneradas, descubre los destinos que te ofrece AICAD Business School. " },
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