<template>
  <div id="section5">
    <tUnis :titles="p6s5titles" :unis="p6s5items"/>
  </div>
</template>

<i18n>
{
  "en":{
    "p6s5titles": [
      {
        "titleS": false
        , "title": "Get to know some of our partner "
      },
      {
        "titleS": true
        , "title": "universities"
      }
    ]
  },
  "es":{
    "p6s5titles": [
      {
        "titleS": false
        , "title": "Conozca algunas "
      },
      {
        "titleS": true
        , "title": "universidades "
      },
      {
        "titleS": false
        , "title": "colaboradoras"
      }
    ]
  }
}
</i18n>

<script>
import tUnis from "@/components/utils/temp_uni";
export default {
  components: {
    tUnis
  },
  data() {
    return {
      p6s5items: [
        {
          uniTitle: "Università Cattolica di Milano",
          uniImg: require("@/assets/images/universidad/cattolica-milano.jpg"),
          uniUrl: "http://www.unicatt.it/"
        },
        {
          uniTitle: "Universidad Camilo José Cela",
          uniImg: require("@/assets/images/universidad/UCJC.jpg"),
          uniUrl: "http://www.ucjc.edu/"
        },
        {
          uniTitle: "Universidad de Deusto",
          uniImg: require("@/assets/images/universidad/deusto.png"),
          uniUrl: "http://www.deusto.es"
        },
        {
          uniTitle: "Università della Valle d’Aosta",
          uniImg: require("@/assets/images/universidad/universita-della-valle-daosta.jpg"),
          uniUrl: "https://www.univda.it/"
        },
        {
          uniTitle: "Universität Heidelberg",
          uniImg: require("@/assets/images/universidad/uni_heidelberg-1.jpg"),
          uniUrl: "https://www.uni-heidelberg.de/"
        },
        {
          uniTitle: "Universidad de Navarra",
          uniImg: require("@/assets/images/universidad/navarra.png"),
          uniUrl: "https://www.unav.edu/"
        },
        {
          uniTitle: "Universidad politecnica de Valencia",
          uniImg: require("@/assets/images/universidad/up-valencia.png"),
          uniUrl: "https://www.upv.es/"
        },
        {
          uniTitle: "Istituto di Mediazione Linguistica di Perugia",
          uniImg: require("@/assets/images/universidad/ssml.png"),
          uniUrl: "http://www.mediazionelinguisticaperugia.it/"
        },
        {
          uniTitle: "Universitá Milano Bicocca",
          uniImg: require("@/assets/images/universidad/milano-bicocca.jpg"),
          uniUrl: "http://www.unimib.it/go/101/Home/Italiano"
        },
        {
          uniTitle: "Ruhr Universität Bochum",
          uniImg: require("@/assets/images/universidad/rub.jpg"),
          uniUrl: "https://www.rub.de/"
        },
        {
          uniTitle: "Universidad de Valencia",
          uniImg: require("@/assets/images/universidad/valencia.png"),
          uniUrl: "http://www.uv.es"
        }
      ]
    };
  },
  computed: {
    p6s5titles() { 
      return this.$t("p6s5titles");
    }
  }
};
</script>