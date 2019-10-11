<template>
  <div id="section">
    <tb :TBtxt1="p12ssubtitlep4" :TBtxt2="p12ssubtitlep5" 
    :TButton1="p12ssubtitlep6" :TButton2="p12ssubtitlep7" 
    :TBurl="p12surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p12ssubtitlep4": "Send us your CV and get ready for the interview",
    "p12ssubtitlep5": "Register on our portal and create your free personal account.",
    "p12ssubtitlep6": "Sign up, find your",
    "p12ssubtitlep7": "Internships"
  },
  "es":{
    "p12ssubtitlep4": "Envíanos tu CV y prepárate para la entrevista",
    "p12ssubtitlep5": "Regístrate en nuestro portal y crea tu cuenta personal gratis. ¡Así de fácil!",
    "p12ssubtitlep6": "Regístrate, encuentra tus ",
    "p12ssubtitlep7": "Prácticas en empresas"
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
      p12surl: "https://jobs.aicad.es"
    }
  },
  computed: {
    p12ssubtitlep4() {
      return this.$t("p12ssubtitlep4");
    },
    p12ssubtitlep5() {
      return this.$t("p12ssubtitlep5");
    },
    p12ssubtitlep6() {
      return this.$t("p12ssubtitlep6");
    },
    p12ssubtitlep7() {
      return this.$t("p12ssubtitlep7");
    }
  }
};
</script>
