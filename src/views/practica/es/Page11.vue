<template>
  <div class="page11">
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
import Section from "@/components/practica/page11/Section";
import Section1 from "@/components/practica/page11/Section1";
import Section2 from "@/components/practica/page11/Section2";
import Section3 from "@/components/practica/page11/Section3";
import Section4 from "@/components/practica/page11/Section4";

export default {
  name: "page11",
  components: {
    Section
    , Section1
    , Section2
    , Section3
    , Section4
  }, 
  head: {
    title: {
      inner: "Como contratar becarios con AICAD"
    },
    
  },
  mounted() {
    this.$i18n.locale = "es";
  }
};
</script>