<template>
  <div id="section">
    <tb :TBtxt1="p11ssubtitlep4" :TBtxt2="p11ssubtitlep5" 
    :TButton1="p11ssubtitlep6" :TButton2="p11ssubtitlep7" 
    :TBurl="p11surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p11ssubtitlep4": "Send us your CV and get ready for the interview",
    "p11ssubtitlep5": "Register on our portal and create your free personal account. That easy!",
    "p11ssubtitlep6": "Sign up",
    "p11ssubtitlep7": "Find your internships"
  },
  "es":{
    "p11ssubtitlep4": "Envíanos tu CV y prepárate para la entrevista",
    "p11ssubtitlep5": "Regístrate en nuestro portal y crea tu cuenta personal gratis. ¡Así de fácil!",
    "p11ssubtitlep6": "Regístrate",
    "p11ssubtitlep7": "Encuentra tus prácticas en empresas"
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
      p11surl: "https://jobs.aicad.es"
    }
  },
  computed: {
    p11ssubtitlep4() {
      return this.$t("p11ssubtitlep4");
    },
    p11ssubtitlep5() {
      return this.$t("p11ssubtitlep5");
    },
    p11ssubtitlep6() {
      return this.$t("p11ssubtitlep6");
    },
    p11ssubtitlep7() {
      return this.$t("p11ssubtitlep7");
    }
  }
};
</script>