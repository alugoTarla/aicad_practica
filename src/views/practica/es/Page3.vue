<template>
  <div class="page3">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section7 />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from "@/components/practica/page3/Section1";
import Section2 from '@/components/practica/page3/Section2';
import Section3 from '@/components/practica/page3/Section3';
import Section4 from '@/components/practica/page3/Section4';
import Section5 from '@/components/practica/page3/Section5';
// import Section6 from '@/components/practica/page3/Section6';
import Section7 from '@/components/practica/page3/Section7';

export default {
  name: "page3",
  components: {
    Section1
    , Section2
    , Section3
    , Section4
    , Section5
    // , Section6
    , Section7
  },
  head: {
    title: {
      inner: "¿Buscas trabajo? Únete al equipo global"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "¡Comienza a trabajar con nuestro equipo de primera! Conocemos tu potencial y deseamos que formes parte de nuestro equipo para ayudarnos a crecer y para potenciar tu carrera profesional.", id: 'desc' }, 
      
      { itemprop: 'name', content: "¿Buscas trabajo? Únete al equipo global" },
      { itemprop: 'description', content: "¡Comienza a trabajar con nuestro equipo de primera! Conocemos tu potencial y deseamos que formes parte de nuestro equipo para ayudarnos a crecer y para potenciar tu carrera profesional." },
      
      { property: 'og:title', content: "¿Buscas trabajo? Únete al equipo global" },
      { property: 'og:description', content: "¡Comienza a trabajar con nuestro equipo de primera! Conocemos tu potencial y deseamos que formes parte de nuestro equipo para ayudarnos a crecer y para potenciar tu carrera profesional." },
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