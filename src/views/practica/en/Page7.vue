<template>
  <div class="page7">
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

<script>
// @ is an alias to /src
import Section from "@/components/practica/page7/Section";
import Section1 from "@/components/practica/page7/Section1";
import Section2 from "@/components/practica/page7/Section2";
import Section3 from "@/components/practica/page7/Section3";
import Section4 from "@/components/practica/page7/Section4";
import Section5 from "@/components/practica/page7/Section5";
import Section6 from "@/components/practica/page7/Section6";
import Section7 from "@/components/practica/page7/Section7";
import Section8 from "@/components/practica/page7/Section8";

export default {
  name: "page7",
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
  }, 
  head: {
    title: {
      inner: "PRACTICE AGENCIES"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Publish a free internship offer through our online form and find students for internships.", id: 'desc' }, 
      
      { itemprop: 'name', content: "PRACTICE AGENCIES" },
      { itemprop: 'description', content: "Publish a free internship offer through our online form and find students for internships." },
      
      { property: 'og:title', content: "PRACTICE AGENCIES" },
      { property: 'og:description', content: "Publish a free internship offer through our online form and find students for internships." },
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