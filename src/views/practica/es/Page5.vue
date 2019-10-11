<template>
  <div class="page5">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page5/Section";
import Section1 from "@/components/practica/page5/Section1";
import Section2 from "@/components/practica/page5/Section2";
import Section3 from "@/components/practica/page5/Section3";
import Section4 from "@/components/practica/page5/Section4";
import Section5 from "@/components/practica/page5/Section5";
import Section6 from "@/components/practica/page5/Section6";
import Section7 from "@/components/practica/page5/Section7";
import Section8 from "@/components/practica/page5/Section8";
import Section9 from "@/components/practica/page5/Section9";
import Section10 from "@/components/practica/page5/Section10";
import Section11 from "@/components/practica/page5/Section11";
import Section12 from "@/components/practica/page5/Section12";

export default {
  name: "page5",
  components: {
    Section
    , Section1
    , Section2
    , Section3
    , Section4
    , Section5
    , Section6
    , Section7
    , Section8
    , Section9
    , Section10
    , Section11
    , Section12
  },
  head: {
    title: {
      inner: "Prácticas en empresas VIP"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "¡Consigue membresía VIP! Publica multitud de ofertas de prácticas universitarias. Encuentra becarios sin fronteras. Diez estrategias claras para encontrar al mejor becario para prácticas. ", id: 'desc' }, 
      
      { itemprop: 'name', content: "Prácticas en empresas VIP" },
      { itemprop: 'description', content: "¡Consigue membresía VIP! Publica multitud de ofertas de prácticas universitarias. Encuentra becarios sin fronteras. Diez estrategias claras para encontrar al mejor becario para prácticas. " },
      
      { property: 'og:title', content: "Prácticas en empresas VIP" },
      { property: 'og:description', content: "¡Consigue membresía VIP! Publica multitud de ofertas de prácticas universitarias. Encuentra becarios sin fronteras. Diez estrategias claras para encontrar al mejor becario para prácticas. " },
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