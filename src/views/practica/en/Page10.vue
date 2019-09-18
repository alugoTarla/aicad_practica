<template>
  <div class="page10">
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
import Section from "@/components/practica/page10/Section";
import Section1 from "@/components/practica/page10/Section1";
import Section2 from "@/components/practica/page10/Section2";
import Section3 from "@/components/practica/page10/Section3";
import Section4 from "@/components/practica/page10/Section4";

export default {
  name: "page10",
  components: {
    Section
    , Section1
    , Section2
    , Section3
    , Section4
  }, 
  head: {
    title: {
      inner: "HOST FOREIGN INTERNS"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Hire interns from all over the world. Fellows from France, Germany, England, Poland or Italy. Post an internship offer and find your best intern. We are an agency to hire foreign interns and students from all over Europe.", id: 'desc' }, 
      
      { itemprop: 'name', content: "HOST FOREIGN INTERNS" },
      { itemprop: 'description', content: "Hire interns from all over the world. Fellows from France, Germany, England, Poland or Italy. Post an internship offer and find your best intern. We are an agency to hire foreign interns and students from all over Europe." },
      
      { property: 'og:title', content: "HOST FOREIGN INTERNS" },
      { property: 'og:description', content: "Hire interns from all over the world. Fellows from France, Germany, England, Poland or Italy. Post an internship offer and find your best intern. We are an agency to hire foreign interns and students from all over Europe." },
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