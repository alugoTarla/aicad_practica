<template>
  <div id="section">
    <tb :TBtxt1="p13ssubtitlep4" :TBtxt2="p13ssubtitlep5" 
    :TButton1="p13ssubtitlep6" :TButton2="p13ssubtitlep7" 
    :TBurl="p13surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p13ssubtitlep4": "Send us your CV and get ready for your first interview",
    "p13ssubtitlep5": "Sign up and open a personal account, it's free and it will take you a few seconds!",
    "p13ssubtitlep6": "Register",
    "p13ssubtitlep7": "find your internships"
  },
  "es":{
    "p13ssubtitlep4": "Envía tu CV y prepárate para una primera entrevista",
    "p13ssubtitlep5": "Regístrate y abre una cuenta personal, ¡es gratis y te tomará unos segundos!",
    "p13ssubtitlep6": "Regístrate",
    "p13ssubtitlep7": "Encuentra tu práctica"
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
      p13surl: "http://jobs.aicad.es"
    }
  },
  computed: {
    p13ssubtitlep4() {
      return this.$t("p13ssubtitlep4");
    },
    p13ssubtitlep5() {
      return this.$t("p13ssubtitlep5");
    },
    p13ssubtitlep6() {
      return this.$t("p13ssubtitlep6");
    },
    p13ssubtitlep7() {
      return this.$t("p13ssubtitlep7");
    }
  }
};
</script>
