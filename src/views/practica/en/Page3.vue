<template>
  <div class="page3">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section7 />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from "@/components/practica/page3/Section1";
import Section2 from '@/components/practica/page3/Section2';
import Section3 from '@/components/practica/page3/Section3';
import Section4 from '@/components/practica/page3/Section4';
import Section5 from '@/components/practica/page3/Section5';
// import Section6 from '@/components/practica/page3/Section6';
import Section7 from '@/components/practica/page3/Section7';

export default {
  name: "page3",
  components: {
    Section1
    , Section2
    , Section3
    , Section4
    , Section5
    // , Section6
    , Section7
  },
  head: {
    title: {
      inner: "LOOKING FOR A JOB"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Start working with our prime team! We know your potential and we want you to be part of our team to help us grow and to strengthen your professional career.", id: 'desc' }, 
      
      { itemprop: 'name', content: "LOOKING FOR A JOB" },
      { itemprop: 'description', content: "Start working with our prime team! We know your potential and we want you to be part of our team to help us grow and to strengthen your professional career." },
      
      { property: 'og:title', content: "LOOKING FOR A JOB" },
      { property: 'og:description', content: "Start working with our prime team! We know your potential and we want you to be part of our team to help us grow and to strengthen your professional career." },
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