<template>
  <div class="page18">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <!-- <Section7 />
      <Section8 /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from "@/components/practica/page18/Section1";
import Section2 from "@/components/practica/page18/Section2";
import Section3 from "@/components/practica/page18/Section3";
import Section4 from "@/components/practica/page18/Section4";
import Section5 from "@/components/practica/page18/Section5";
import Section6 from "@/components/practica/page18/Section6";
// import Section7 from "@/components/practica/page18/Section7";
// import Section8 from "@/components/practica/page18/Section8";

export default {
  name: "page18",
  components: {
    Section1
    , Section2
    , Section3
    , Section4
    , Section5
    , Section6
    // , Section7
    // , Section8
  }, 
  head: {
    title: {
      inner: "Universidades y Career Centre"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Soluciones para career centre. Conoce empresas que desean acoger estudiantes de prácticas en empresas. Facilita el acceso a los estudiantes a prácticas profesionales en empresas. ", id: 'desc' }, 
      
      { itemprop: 'name', content: "Universidades y Career Centre" },
      { itemprop: 'description', content: "Soluciones para career centre. Conoce empresas que desean acoger estudiantes de prácticas en empresas. Facilita el acceso a los estudiantes a prácticas profesionales en empresas. " },
      
      { property: 'og:title', content: "Universidades y Career Centre" },
      { property: 'og:description', content: "Soluciones para career centre. Conoce empresas que desean acoger estudiantes de prácticas en empresas. Facilita el acceso a los estudiantes a prácticas profesionales en empresas. " },
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