<template>
  <div id="section">
    <tb :TBtxt1="p6ssubtitlep4" :TBtxt2="p6ssubtitlep5" 
    :TButton1="p6ssubtitlep6" :TButton2="p6ssubtitlep7" 
    :TBurl="p6surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p6ssubtitlep4": "Create and organize mobility programs and international internships",
    "p6ssubtitlep5":
      "We give you more information about our services for educational institutions and universities regarding the coordination of the Erasmus + Scholarship and European funds for international internships in companies",
    "p6ssubtitlep6": "Contact us",
    "p6ssubtitlep7": "Espamob Coordinators"
  },
  "es":{
    "p6ssubtitlep4": "Crea y organiza programas de movilidad y prácticas internacionales en empresas",
    "p6ssubtitlep5":
      "Te brindamos más información sobre nuestros servicios para instituciones educativas y universidades en cuanto a coordinación de la Beca Erasmus+ y los fondos europeos para prácticas internacionales en empresas",
    "p6ssubtitlep6": "Contactenos",
    "p6ssubtitlep7": "Coordinadores Espamob"
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
      p6surl: "https://jobs.aicad.es"
    }
  },
  computed: {
    p6ssubtitlep4() {
      return this.$t("p6ssubtitlep4");
    },
    p6ssubtitlep5() {
      return this.$t("p6ssubtitlep5");
    },
    p6ssubtitlep6() {
      return this.$t("p6ssubtitlep6");
    },
    p6ssubtitlep7() {
      return this.$t("p6ssubtitlep7");
    }
  }
};
</script>
