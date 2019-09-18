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
    "p1stitle1": "Madrid, Barcelona, Canary Islands, Balearic Islands, the Mediterranean Coast and Andalusia",
    "p1stitle2": "They are some of the destinations in which we can offer internships to your clients",
    "p1sbutton1": "Become a partner agency",
    "p1sbutton2": "Contact us"
  },
  "es":{
    "p1stitle1": "Madrid, Barcelona, Islas Canarias, Baleares, la Costa mediterránea y Andalucía",
    "p1stitle2": "Son algunos de los destinos en los que podemos ofrecer prácticas a tus clientes",
    "p1sbutton1": "Hazte agencia partner",
    "p1sbutton2": "CONTÁCTANOS"
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

