<template>
  <div id="section">
    <tb :TBtxt1="p2stitle1" :TBtxt2="p2stitle2" 
    :TButton1="p2sbutton1" :TButton2="p2sbutton2" 
    :TBurl="p2surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p2stitle1": "Sign up and wait for us to contact you",
    "p2stitle2": "Open your account on our free portal and take the first step towards the working world",
    "p2sbutton1": "Sign up",
    "p2sbutton2": "To get your internship "
  },
  "es":{
    "p2stitle1": "Regístrate y espera a que te contactemos",
    "p2stitle2": "Abre tu cuenta en nuestro portal gratis y da el primer paso hacia el mundo laboral",
    "p2sbutton1": "Regístrate",
    "p2sbutton2": "Para obtener tu práctica en empresas"
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
      p2surl: "http://jobs.aicad.es"
    }
  },
  computed: {
    p2stitle1() {
      return this.$t("p2stitle1");
    },
    p2stitle2() {
      return this.$t("p2stitle2");
    },
    p2sbutton1() {
      return this.$t("p2sbutton1");
    },
    p2sbutton2() {
      return this.$t("p2sbutton2");
    }
  }
};
</script>
