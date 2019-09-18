<template>
  <div class="page9">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from "@/components/practica/page9/Section1";
import Section2 from "@/components/practica/page9/Section2";
import Section3 from "@/components/practica/page9/Section3";

export default {
  name: "page9",
  components: {
    Section1
    , Section2
    , Section3
  }, 
  head: {
    title: {
      inner: "PARTNER UNIVERSITIES"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Meet the organizations, schools, universities and institutions that collaborate and trust AICAD Business School so as to help their students with internships.", id: 'desc' }, 
      
      { itemprop: 'name', content: "PARTNER UNIVERSITIES" },
      { itemprop: 'description', content: "Meet the organizations, schools, universities and institutions that collaborate and trust AICAD Business School so as to help their students with internships." },
      
      { property: 'og:title', content: "PARTNER UNIVERSITIES" },
      { property: 'og:description', content: "Meet the organizations, schools, universities and institutions that collaborate and trust AICAD Business School so as to help their students with internships." },
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