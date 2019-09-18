<template>
  <div class="page16">
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
import Section from "@/components/practica/page16/Section";
import Section1 from "@/components/practica/page16/Section1";
import Section2 from "@/components/practica/page16/Section2";
import Section3 from "@/components/practica/page16/Section3";
import Section4 from "@/components/practica/page16/Section4";

export default {
  name: "page15",
  components: {
    Section
    , Section1
    , Section2
    , Section3
    , Section4
  }, 
  head: {
    title: {
      inner: "WORK AND TRAVEL AGENCY"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "If you are looking for a partner agency to expand your services, collaborate with us and offer your clients the best internship opportunities in Spain. Regard Spain as a destination for your offers. Collaborate with work and travel agencies.", id: 'desc' }, 
      
      { itemprop: 'name', content: "WORK AND TRAVEL AGENCY" },
      { itemprop: 'description', content: "If you are looking for a partner agency to expand your services, collaborate with us and offer your clients the best internship opportunities in Spain. Regard Spain as a destination for your offers. Collaborate with work and travel agencies." },
      
      { property: 'og:title', content: "WORK AND TRAVEL AGENCY" },
      { property: 'og:description', content: "If you are looking for a partner agency to expand your services, collaborate with us and offer your clients the best internship opportunities in Spain. Regard Spain as a destination for your offers. Collaborate with work and travel agencies." },
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