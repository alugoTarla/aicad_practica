<template>
  <div id="section">
    <tb :TBtxt1="p17ssubtitlep4" :TBtxt2="p17ssubtitlep5" 
    :TButton1="p17ssubtitlep6" :TButton2="p17ssubtitlep7" 
    :TBurl="p17surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p17ssubtitlep4": "Contact us to publish an internship offer",
    "p17ssubtitlep5": "It is as simple as completing the form, write or call us. We will help you.",
    "p17ssubtitlep6": "Post publish ",
    "p17ssubtitlep7": "your internship offer"
  },
  "es":{
    "p17ssubtitlep4": "Contáctanos para publicar una oferta de prácticas en empresas",
    "p17ssubtitlep5": "Es tan simple como completar el formulario, escribirnos o llamarnos. Nosotros te ayudaremos.",
    "p17ssubtitlep6": "Publica gratuitamente tu",
    "p17ssubtitlep7": "Oferta de prácticas en empresas"
  }
}
</i18n>

<script>
import tb from "@/components/utils/temp_boton";
export default {
  components: {
    tb
  },
  data() {
    return {
      p17surl: "https://jobs.aicad.es"
    }
  },
  computed: {
    p17ssubtitlep4() {
      return this.$t("p17ssubtitlep4");
    },
    p17ssubtitlep5() {
      return this.$t("p17ssubtitlep5");
    },
    p17ssubtitlep6() {
      return this.$t("p17ssubtitlep6");
    },
    p17ssubtitlep7() {
      return this.$t("p17ssubtitlep7");
    }
  }
};
</script>

<style>

</style>
