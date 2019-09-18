<template>
  <div class="page2">
    <div class="wrapper">
      <Section1 />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page2/Section";
import Section1 from "@/components/practica/page2/Section1";
import Section2 from "@/components/practica/page2/Section2";
import Section3 from "@/components/practica/page2/Section3";
import Section4 from "@/components/practica/page2/Section4";

export default {
  name: "page2",
  components: {
    Section,
    Section1,
    Section2,
    Section3,
    Section4
  }, 
  head: {
    title: {
      inner: "INTERNSHIPS IN 3 STEPS"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Ideal internships for you in just 3 steps", id: 'desc' }, 
      
      { itemprop: 'name', content: "INTERNSHIPS IN 3 STEPS" },
      { itemprop: 'description', content: "Ideal internships for you in just 3 steps" },
      
      { property: 'og:title', content: "INTERNSHIPS IN 3 STEPS" },
      { property: 'og:description', content: "Ideal internships for you in just 3 steps" },
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