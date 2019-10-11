<template>
  <div class="page12">
    <div class="wrapper">
      <Section1 />
      <Section />
      <Section2 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page12/Section";
import Section1 from "@/components/practica/page12/Section1";
import Section2 from "@/components/practica/page12/Section2";

export default {
  name: "page12",
  components: {
    Section
    , Section1
    , Section2
  }, 
  head: {
    title: {
      inner: "Frequently asked questions of students"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Questions and answers to do your internships abroad or in Spain. Paid university inernships: Questions and answers. Frequently asked questions about in-company internships.", id: 'desc' }, 
      
      { itemprop: 'name', content: "Frequently asked questions of students" },
      { itemprop: 'description', content: "Questions and answers to do your internships abroad or in Spain. Paid university inernships: Questions and answers. Frequently asked questions about in-company internships." },
      
      { property: 'og:title', content: "Frequently asked questions of students" },
      { property: 'og:description', content: "Questions and answers to do your internships abroad or in Spain. Paid university inernships: Questions and answers. Frequently asked questions about in-company internships." },
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