<template>
  <div id="section">
    <tb :TBtxt1="p9ssubtitlep4" :TBtxt2="p9ssubtitlep5" 
    :TButton1="p9ssubtitlep6" :TButton2="p9ssubtitlep7" 
    :TBurl="p9surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p9ssubtitlep4": "Send us your CV and get ready for the interview",
    "p9ssubtitlep5": "Register on our portal and create your free personal account. That easy!",
    "p9ssubtitlep6": "Sign up",
    "p9ssubtitlep7": "Find your internships in companies"
  },
  "es":{
    "p9ssubtitlep4": "Envíanos tu CV y prepárate para la entrevista",
    "p9ssubtitlep5": "Regístrate en nuestro portal y crea tu cuenta personal gratis. ¡Así de fácil!",
    "p9ssubtitlep6": "Regístrate",
    "p9ssubtitlep7": "Encuentra tus prácticas en empresas"
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
      p9surl: "https://jobs.aicad.es"
    }
  },
  computed: {
    p9ssubtitlep4() {
      return this.$t("p9ssubtitlep4");
    },
    p9ssubtitlep5() {
      return this.$t("p9ssubtitlep5");
    },
    p9ssubtitlep6() {
      return this.$t("p9ssubtitlep6");
    },
    p9ssubtitlep7() {
      return this.$t("p9ssubtitlep7");
    }
  }
};
</script>

<style>

</style>
