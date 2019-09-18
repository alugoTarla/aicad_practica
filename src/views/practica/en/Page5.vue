<template>
  <div class="page5">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page5/Section";
import Section1 from "@/components/practica/page5/Section1";
import Section2 from "@/components/practica/page5/Section2";
import Section3 from "@/components/practica/page5/Section3";
import Section4 from "@/components/practica/page5/Section4";
import Section5 from "@/components/practica/page5/Section5";
import Section6 from "@/components/practica/page5/Section6";
import Section7 from "@/components/practica/page5/Section7";
import Section8 from "@/components/practica/page5/Section8";
import Section9 from "@/components/practica/page5/Section9";
import Section10 from "@/components/practica/page5/Section10";
import Section11 from "@/components/practica/page5/Section11";
import Section12 from "@/components/practica/page5/Section12";

export default {
  name: "page5",
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
    , Section9
    , Section10
    , Section11
    , Section12
  },
  head: {
    title: {
      inner: "PREMIUM BUSINESS INTERNSHIPS"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Get VIP membership! Post a multitude of university internship offers. Find Iinterns without borders. Ten clear strategies to find the best intern for your company.", id: 'desc' }, 
      
      { itemprop: 'name', content: "PREMIUM BUSINESS INTERNSHIPS" },
      { itemprop: 'description', content: "Get VIP membership! Post a multitude of university internship offers. Find Iinterns without borders. Ten clear strategies to find the best intern for your company." },
      
      { property: 'og:title', content: "PREMIUM BUSINESS INTERNSHIPS" },
      { property: 'og:description', content: "Get VIP membership! Post a multitude of university internship offers. Find Iinterns without borders. Ten clear strategies to find the best intern for your company." },
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