<template>
  <div id="section">
    <tb :TBtxt1="p8ssubtitlep4" :TBtxt2="p8ssubtitlep5" 
    :TButton1="p8ssubtitlep6" :TButton2="p8ssubtitlep7" 
    :TBurl="p8surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p8ssubtitlep4": "Send us your CV and get ready for the interview",
    "p8ssubtitlep5": "Register on our portal and create your free personal account. That easy!",
    "p8ssubtitlep6": "Sign up",
    "p8ssubtitlep7": "Find your internships in companies"
  },
  "es":{
    "p8ssubtitlep4": "Envíanos tu CV y prepárate para la entrevista",
    "p8ssubtitlep5": "Regístrate en nuestro portal y crea tu cuenta personal gratis. ¡Así de fácil!",
    "p8ssubtitlep6": "Regístrate",
    "p8ssubtitlep7": "Encuentra tus prácticas en empresas"
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
      p8surl: "https://jobs.aicad.es"
    }
  },
  computed: {
    p8ssubtitlep4() {
      return this.$t("p8ssubtitlep4");
    },
    p8ssubtitlep5() {
      return this.$t("p8ssubtitlep5");
    },
    p8ssubtitlep6() {
      return this.$t("p8ssubtitlep6");
    },
    p8ssubtitlep7() {
      return this.$t("p8ssubtitlep7");
    }
  }
};
</script>

<style>

</style>
