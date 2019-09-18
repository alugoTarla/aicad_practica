<template>
  <div class="page1">
    <div class="wrapper">
      <Section1 />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section />
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "title" : "Internships in companies"
    , "descrip" : "Select and introduce yourself to internships in companies that interest you from the list of offers! We have the ideal business practices for you in just 3 steps. Student practices in trusted companies."
  },
  "es":{
    "title" : "Practicas en empresas"
    , "descrip" : "¡Selecciona y preséntate a las prácticas en empresas que te interesen del listado de ofertas! Tenemos las prácticas en empresas ideales para ti a tan solo 3 pasos.  Practicas estudiantiles en empresas de confianza."
  }
}
</i18n>


<script>
// @ is an alias to /src
import Section from "@/components/practica/page1/Section";
import Section1 from "@/components/practica/page1/Section1";
import Section2 from "@/components/practica/page1/Section2";
import Section3 from "@/components/practica/page1/Section3";
import Section4 from "@/components/practica/page1/Section4";
import Section5 from "@/components/practica/page1/Section5";
import Section6 from "@/components/practica/page1/Section6";
import Section7 from "@/components/practica/page1/Section7";
import Section8 from "@/components/practica/page1/Section8";

export default {
  name: "page1",
  components: {
    Section,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8
  },
  head: {
    title: {
      inner: "Practicas en empresas"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "¡Selecciona y preséntate a las prácticas en empresas que te interesen del listado de ofertas! Tenemos las prácticas en empresas ideales para ti a tan solo 3 pasos.  Practicas estudiantiles en empresas de confianza.", id: 'desc' }, 
      
      { itemprop: 'name', content: "Practicas en empresas" },
      { itemprop: 'description', content: "¡Selecciona y preséntate a las prácticas en empresas que te interesen del listado de ofertas! Tenemos las prácticas en empresas ideales para ti a tan solo 3 pasos.  Practicas estudiantiles en empresas de confianza." },
      
      { property: 'og:title', content: "Practicas en empresas" },
      { property: 'og:description', content: "¡Selecciona y preséntate a las prácticas en empresas que te interesen del listado de ofertas! Tenemos las prácticas en empresas ideales para ti a tan solo 3 pasos.  Practicas estudiantiles en empresas de confianza." },
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