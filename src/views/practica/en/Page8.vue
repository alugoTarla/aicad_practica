<template>
  <div class="page8">
    <div class="wrapper">
      <Section1 />
      <Section />
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
import Section from "@/components/practica/page8/Section";
import Section1 from "@/components/practica/page8/Section1";
import Section2 from "@/components/practica/page8/Section2";
import Section3 from "@/components/practica/page8/Section3";
import Section4 from "@/components/practica/page8/Section4";
import Section5 from "@/components/practica/page8/Section5";

export default {
  name: "page8",
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
      inner: "COUNTRIES TO DO INTERNSHIPS IN"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "If you wonder where you can do an internship or in which countries of the world you can do paid internships, check out the destinations offered by AICAD Business School.", id: 'desc' }, 
      
      { itemprop: 'name', content: "COUNTRIES TO DO INTERNSHIPS IN" },
      { itemprop: 'description', content: "If you wonder where you can do an internship or in which countries of the world you can do paid internships, check out the destinations offered by AICAD Business School." },
      
      { property: 'og:title', content: "COUNTRIES TO DO INTERNSHIPS IN" },
      { property: 'og:description', content: "If you wonder where you can do an internship or in which countries of the world you can do paid internships, check out the destinations offered by AICAD Business School." },
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