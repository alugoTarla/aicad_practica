<template>
  <div class="page9">
    <div class="wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section1 from "@/components/practica/page9/Section1";
import Section2 from "@/components/practica/page9/Section2";
import Section3 from "@/components/practica/page9/Section3";

export default {
  name: "page9",
  components: {
    Section1
    , Section2
    , Section3
  }, 
  head: {
    title: {
      inner: "Universidades colaboradoras"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Conoce las organizaciones, escuelas, universidades e instituciones que colaboran y confían en AICAD Business School para que sus estudiantes realicen prácticas universitarias.", id: 'desc' }, 
      
      { itemprop: 'name', content: "Universidades colaboradoras" },
      { itemprop: 'description', content: "Conoce las organizaciones, escuelas, universidades e instituciones que colaboran y confían en AICAD Business School para que sus estudiantes realicen prácticas universitarias." },
      
      { property: 'og:title', content: "Universidades colaboradoras" },
      { property: 'og:description', content: "Conoce las organizaciones, escuelas, universidades e instituciones que colaboran y confían en AICAD Business School para que sus estudiantes realicen prácticas universitarias." },
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

<style scoped lang="scss">
@import "../../../assets/css/master-postgrado/bootstrap.min.css";
@import "../../../assets/css/master-postgrado/main.css";
@import "../../../assets/css/stlProyecto.css";
</style>