<template>
  <div class="page17">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section4 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page17/Section";
import Section1 from "@/components/practica/page17/Section1";
import Section2 from "@/components/practica/page17/Section2";
import Section3 from "@/components/practica/page17/Section3";
import Section4 from "@/components/practica/page17/Section4";
import Section5 from "@/components/practica/page17/Section5";

export default {
  name: "page17",
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
      inner: "Universidades y Agencias Partner"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Facilita el acceso de los estudiantes a ofertas de prácticas internacionales en empresas de trayectoria. Si eres una universidad o agencia de movilidad estudiantil internacional, somos el partner que buscabas. Practicas estudiantiles para Universidades y Agencias work and travel", id: 'desc' }, 
      
      { itemprop: 'name', content: "Universidades y Agencias Partner" },
      { itemprop: 'description', content: "Facilita el acceso de los estudiantes a ofertas de prácticas internacionales en empresas de trayectoria. Si eres una universidad o agencia de movilidad estudiantil internacional, somos el partner que buscabas. Practicas estudiantiles para Universidades y Agencias work and travel" },
      
      { property: 'og:title', content: "Universidades y Agencias Partner" },
      { property: 'og:description', content: "Facilita el acceso de los estudiantes a ofertas de prácticas internacionales en empresas de trayectoria. Si eres una universidad o agencia de movilidad estudiantil internacional, somos el partner que buscabas. Practicas estudiantiles para Universidades y Agencias work and travel" },
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