<template>
  <div class="page12">
    <div class="wrapper">
      <Section />
      <Section1 />
      <Section />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/practica/page12/Section";
import Section1 from "@/components/practica/page12/Section1";

export default {
  name: "page12",
  components: {
    Section
    , Section1
  }, 
  head: {
    title: {
      inner: "Preguntas frecuentes de alumnos"
    },
    meta: [
      { name: 'application-name', content: 'AICAD Business School' },
      { name: 'description', content: "Preguntas y respuestas para hacer tus prácticas universitarias en el extranjero o en España. Practicas universitarias remuneradas: Preguntas y respuestas. Preguntas frecuentes sobre prácticas en empresas", id: 'desc' }, 
      
      { itemprop: 'name', content: "Preguntas frecuentes de alumnos" },
      { itemprop: 'description', content: "Preguntas y respuestas para hacer tus prácticas universitarias en el extranjero o en España. Practicas universitarias remuneradas: Preguntas y respuestas. Preguntas frecuentes sobre prácticas en empresas" },
      
      { property: 'og:title', content: "Preguntas frecuentes de alumnos" },
      { property: 'og:description', content: "Preguntas y respuestas para hacer tus prácticas universitarias en el extranjero o en España. Practicas universitarias remuneradas: Preguntas y respuestas. Preguntas frecuentes sobre prácticas en empresas" },
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