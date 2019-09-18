<template>
  <div id="section">
    <tb :TBtxt1="p1stitle1" :TBtxt2="p1stitle2" 
    :TButton1="p1sbutton1" :TButton2="p1sbutton2" 
    :TBurl="p1surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p1stitle1": "We help you create your CV and get ready for the interview",
    "p1stitle2": "Register in our job portal, Get internships in companies!",
    "p1sbutton1": "Sign up",
    "p1sbutton2": "Internships in companies"
  },
  "es":{
    "p1stitle1": "Te ayudamos a crear tu CV y prepárate para la entrevista",
    "p1stitle2": "Regístrate en nuestro portal de empleo, ¡Consigue prácticas en empresas!",
    "p1sbutton1": "Regístrate",
    "p1sbutton2": "Prácticas en empresas"
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
      p1surl: "http://jobs.aicad.es"
    }
  },
  computed: {
    p1stitle1() {
      return this.$t("p1stitle1");
    },
    p1stitle2() {
      return this.$t("p1stitle2");
    },
    p1sbutton1() {
      return this.$t("p1sbutton1");
    },
    p1sbutton2() {
      return this.$t("p1sbutton2");
    }
  }
};
</script>

