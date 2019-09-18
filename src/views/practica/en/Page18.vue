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
      inner: "UNIVERSITIES AND CAREER CENTER"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Solutions for career centers. Meet companies that want to host interns in their organization. Facilitate students’ access to professional internships.", id: 'desc' }, 
      
      { itemprop: 'name', content: "UNIVERSITIES AND CAREER CENTER" },
      { itemprop: 'description', content: "Solutions for career centers. Meet companies that want to host interns in their organization. Facilitate students’ access to professional internships." },
      
      { property: 'og:title', content: "UNIVERSITIES AND CAREER CENTER" },
      { property: 'og:description', content: "Solutions for career centers. Meet companies that want to host interns in their organization. Facilitate students’ access to professional internships." },
    ],
    // link: [
    //   { rel: 'canonical', href: '/practica/', id: 'canonical' },
    // ],
  },
  mounted() {
    this.$i18n.locale = "en";
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/css/master-postgrado/bootstrap.min.css";
@import "../../../assets/css/master-postgrado/main.css";
@import "../../../assets/css/stlProyecto.css";
</style>