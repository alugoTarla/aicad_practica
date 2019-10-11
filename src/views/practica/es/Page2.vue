<template>
  <div class="page2">
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
import Section from "@/components/practica/page2/Section";
import Section1 from "@/components/practica/page2/Section1";
import Section2 from "@/components/practica/page2/Section2";
import Section3 from "@/components/practica/page2/Section3";
import Section4 from "@/components/practica/page2/Section4";

export default {
  name: "page2",
  components: {
    Section,
    Section1,
    Section2,
    Section3,
    Section4
  }, 
  head: {
    title: {
      inner: "Practicas en 3 pasos"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Tenemos las prácticas en empresas ideales para ti a tan solo 3 pasos.", id: 'desc' }, 
      
      { itemprop: 'name', content: "Practicas en 3 pasos" },
      { itemprop: 'description', content: "Tenemos las prácticas en empresas ideales para ti a tan solo 3 pasos." },
      
      { property: 'og:title', content: "Practicas en 3 pasos" },
      { property: 'og:description', content: "Tenemos las prácticas en empresas ideales para ti a tan solo 3 pasos." },
    ],
    // link: [
    //   { rel: 'canonical', href: '/practica/', id: 'canonical' },
    // ],
  },
  mounted() {
    this.$i18n.locale = "es";
  }
};
</script>