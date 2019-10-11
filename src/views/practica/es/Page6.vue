<template>
  <div class="page6">
    <div class="wrapper">
      <Section1 />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section6 />
      <Section5 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page6/Section";
import Section1 from "@/components/practica/page6/Section1";
import Section2 from "@/components/practica/page6/Section2";
import Section3 from "@/components/practica/page6/Section3";
import Section4 from "@/components/practica/page6/Section4";
import Section5 from "@/components/practica/page6/Section5";
import Section6 from "@/components/practica/page6/Section6";

export default {
  name: "page6",
  components: {
    Section
    , Section1
    , Section2
    , Section3
    , Section4
    , Section5
    , Section6
  },
  head: {
    title: {
      inner: "Prácticas en empresas Erasmus"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Encuentra más información sobre los servicios para universidades y escuelas en cuanto a coordinación de Beca Erasmus, programas de movilidad y fondos europeos con empresas de confianza y larga trayectoria.", id: 'desc' }, 
      
      { itemprop: 'name', content: "Prácticas en empresas Erasmus" },
      { itemprop: 'description', content: "Encuentra más información sobre los servicios para universidades y escuelas en cuanto a coordinación de Beca Erasmus, programas de movilidad y fondos europeos con empresas de confianza y larga trayectoria." },
      
      { property: 'og:title', content: "Prácticas en empresas Erasmus" },
      { property: 'og:description', content: "Encuentra más información sobre los servicios para universidades y escuelas en cuanto a coordinación de Beca Erasmus, programas de movilidad y fondos europeos con empresas de confianza y larga trayectoria." },
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