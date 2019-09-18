<template>
  <div class="page6">
    <div class="wrapper">
      <Section1 />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
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
      inner: "INTERNSHIPS IN ERASMUS COMPANIES"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Find more information about services for universities and schools in terms of coordination of Erasmus Scholarship, mobility programs and European funds for trusted companies with long experience.", id: 'desc' }, 
      
      { itemprop: 'name', content: "INTERNSHIPS IN ERASMUS COMPANIES" },
      { itemprop: 'description', content: "Find more information about services for universities and schools in terms of coordination of Erasmus Scholarship, mobility programs and European funds for trusted companies with long experience." },
      
      { property: 'og:title', content: "INTERNSHIPS IN ERASMUS COMPANIES" },
      { property: 'og:description', content: "Find more information about services for universities and schools in terms of coordination of Erasmus Scholarship, mobility programs and European funds for trusted companies with long experience." },
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