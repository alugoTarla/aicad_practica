<template>
  <div class="page17">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from "@/components/practica/page17/Section1";
import Section2 from "@/components/practica/page17/Section2";
import Section3 from "@/components/practica/page17/Section3";
import Section4 from "@/components/practica/page17/Section4";
import Section5 from "@/components/practica/page17/Section5";

export default {
  name: "page17",
  components: {
    Section1
    , Section2
    , Section3
    , Section4
    , Section5
  }, 
  head: {
    title: {
      inner: "PARTNER UNIVERSITIES AND AGENCIES"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Facilitate  students' access to international internship offers in experienced companies. If you are an international student mobility university or agency, we are the partner that you were looking for. Internships for Universities and work and travel agencies.", id: 'desc' }, 
      
      { itemprop: 'name', content: "PARTNER UNIVERSITIES AND AGENCIES" },
      { itemprop: 'description', content: "Facilitate  students' access to international internship offers in experienced companies. If you are an international student mobility university or agency, we are the partner that you were looking for. Internships for Universities and work and travel agencies." },
      
      { property: 'og:title', content: "PARTNER UNIVERSITIES AND AGENCIES" },
      { property: 'og:description', content: "Facilitate  students' access to international internship offers in experienced companies. If you are an international student mobility university or agency, we are the partner that you were looking for. Internships for Universities and work and travel agencies." },
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