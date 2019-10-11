<template>
  <div id="section">
    <tb :TBtxt1="p7ssubtitlep4" :TBtxt2="p7ssubtitlep5" 
    :TButton1="p7ssubtitlep6" :TButton2="p7ssubtitlep7" 
    :TBurl="p7surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p7ssubtitlep4": "Contact us to publish an internship offer",
    "p7ssubtitlep5":
      "It is as simple as completing the form, write or call us. We will help you.",
    "p7ssubtitlep6": "Post your free",
    "p7ssubtitlep7": "Internship offer in companies"
  },
  "es":{
    "p7ssubtitlep4": "Contáctanos para publicar una oferta de prácticas en empresas",
    "p7ssubtitlep5":
      "Es tan simple como completar el formulario, escribirnos o llamarnos. Nosotros te ayudaremos.",
    "p7ssubtitlep6": "Publicar gratuitamente tu",
    "p7ssubtitlep7": "Oferta de prácticas en empresas"
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
      p7surl: "https://jobs.aicad.es"
    }
  },
  computed: {
    p7ssubtitlep4() {
      return this.$t("p7ssubtitlep4");
    },
    p7ssubtitlep5() {
      return this.$t("p7ssubtitlep5");
    },
    p7ssubtitlep6() {
      return this.$t("p7ssubtitlep6");
    },
    p7ssubtitlep7() {
      return this.$t("p7ssubtitlep7");
    }
  }
};
</script>
