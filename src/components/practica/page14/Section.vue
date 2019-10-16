<template>
  <div id="section">
    <tb :TBtxt1="p4stitle1" :TBtxt2="p4stitle2" 
    :TButton1="p4sbutton1" :TButton2="p4sbutton2" 
    :TBurl="p4surl" />
  </div>
</template>

<i18n>
{
  "en":{
    "p4stitle1": "Make the management of the internship agreement in companies without problems with us",
    "p4stitle2": "In our long history we have helped companies in all matters related to documentation, regulations, bonuses and social security of interns and interns in companies",
    "p4sbutton1": "Do you have questions about the agreements or would you like more information? ",
    "p4sbutton2": "Contact us"
  },
  "es":{
    "p4stitle1": "Realiza las gestiones del convenio de prácticas en empresas con nosotros",
    "p4stitle2": "En nuestra larga trayectoria hemos ayudado a empresas en todo lo concerniente a documentación, normativa, bonificaciones y seguridad social de becarios y estudiantes de prácticas en empresas",
    "p4sbutton1": "¿Tienes dudas sobre los convenios o deseas más información? ",
    "p4sbutton2": "Contáctanos"
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
      p4surl: "https://jobs.aicad.es"
    }
  },
  computed: {
    p4stitle1() {
      return this.$t("p4stitle1");
    },
    p4stitle2() {
      return this.$t("p4stitle2");
    },
    p4sbutton1() {
      return this.$t("p4sbutton1");
    },
    p4sbutton2() {
      return this.$t("p4sbutton2");
    }
  }
};
</script>

