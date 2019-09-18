<template>
  <div class="page1">
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
import Section from "@/components/practica/page1/Section";
import Section1 from "@/components/practica/page1/Section1";
import Section2 from "@/components/practica/page1/Section2";
import Section3 from "@/components/practica/page1/Section3";
import Section4 from "@/components/practica/page1/Section4";
import Section5 from "@/components/practica/page1/Section5";
import Section6 from "@/components/practica/page1/Section6";
import Section7 from "@/components/practica/page1/Section7";
import Section8 from "@/components/practica/page1/Section8";

export default {
  name: "page1",
  components: {
    Section,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8
  },
  head: {
    title: {
      inner: "IN-COMPANY INTERNSHIPS"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "From the list of offers, select the internship that interests you and apply! We have the ideal internship  for you in just 3 steps. Student internships in trusted companies.", id: 'desc' }, 
      
      { itemprop: 'name', content: "IN-COMPANY INTERNSHIPS" },
      { itemprop: 'description', content: "From the list of offers, select the internship that interests you and apply! We have the ideal internship  for you in just 3 steps. Student internships in trusted companies." },
      
      { property: 'og:title', content: "IN-COMPANY INTERNSHIPS" },
      { property: 'og:description', content: "From the list of offers, select the internship that interests you and apply! We have the ideal internship  for you in just 3 steps. Student internships in trusted companies." },
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