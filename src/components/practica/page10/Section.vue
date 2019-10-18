<template>
  <div id="section">
    <tb :TBtxt1="p10ssubtitlep4" :TBtxt2="p10ssubtitlep5" 
    :TButton1="p10ssubtitlep6" :TButton2="p10ssubtitlep7" 
    :TBurl="p10surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p10ssubtitlep4": "Contact us to publish an internship offer",
    "p10ssubtitlep5": "It is as simple as completing the form, write or call us. We will help you.",
    "p10ssubtitlep6": "Post publish ",
    "p10ssubtitlep7": "Your internship offer"
  },
  "es":{
    "p10ssubtitlep4": "Contáctanos para publicar una oferta de prácticas en empresas",
    "p10ssubtitlep5": "Es tan simple como completar el formulario, escribirnos o llamarnos. Nosotros te ayudaremos.",
    "p10ssubtitlep6": "Publica gratis",
    "p10ssubtitlep7": "Oferta de prácticas en empresas"
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
      p10surl: "https://jobs.aicad.es"
    }
  },
  computed: {
    p10ssubtitlep4() {
      return this.$t("p10ssubtitlep4");
    },
    p10ssubtitlep5() {
      return this.$t("p10ssubtitlep5");
    },
    p10ssubtitlep6() {
      return this.$t("p10ssubtitlep6");
    },
    p10ssubtitlep7() {
      return this.$t("p10ssubtitlep7");
    }
  }
};
</script>

<style>

</style>
