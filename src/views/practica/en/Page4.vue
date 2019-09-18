<template>
  <div class="page4">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page4/Section";
import Section1 from "@/components/practica/page4/Section1";
import Section2 from "@/components/practica/page4/Section2";
import Section3 from "@/components/practica/page4/Section3";
import Section4 from "@/components/practica/page4/Section4";
import Section5 from "@/components/practica/page4/Section5";

export default {
  name: "page4",
  components: {
    Section
    , Section1
    , Section2
    , Section3
    , Section4
    , Section5
  },
  head: {
    title: {
      inner: "HOST INTERNS"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Everything you need to know about internship agreements and the social security contribution of fellows. Ask for our advice and prevent  problems with the inspection.", id: 'desc' }, 
      
      { itemprop: 'name', content: "HOST INTERNS" },
      { itemprop: 'description', content: "Everything you need to know about internship agreements and the social security contribution of fellows. Ask for our advice and prevent  problems with the inspection." },
      
      { property: 'og:title', content: "HOST INTERNS" },
      { property: 'og:description', content: "Everything you need to know about internship agreements and the social security contribution of fellows. Ask for our advice and prevent  problems with the inspection." },
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