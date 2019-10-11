<template>
  <div id="section1">
    <div class="p17s1fondoFwhite" :style="'background-image: url(' + p17s1Img + ');'">
      <div class="overlay">
        <b-container fluid>
          <b-container class="text-center">
            <br />
            <br />
            <h2 >
              <div v-for="(item, idx) in p17s1titulos" :key="idx">
                {{item}}
              </div>
            </h2>
            <br />
            <b-row align-h="center" align-v="center">
              <b-col md="10" sm="12">
                <h3>{{$t("p17s1titulos2")}}</h3>
              </b-col>
            </b-row>            
            <br />
            <br />
          </b-container>
        </b-container>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p17s1titulos": [
        "Find out about the benefits we offer to",
        "Work and Travel universities and agencies to help",
        "The students to find internships in Spain"
      ],
    "p17s1titulos2":
        "We facilitate students’ access to numerous internship offers throughout Spain so they can live a unique professional experience."  
  },
  "es":{
    "p17s1titulos": [
        "Infórmate sobre los beneficios que ofrecemos a las",
        "universidades y agenciad de Work and Travel para ayudar",
        "a estudiantes a encontrar prácticas profesionales en España"
      ],
    "p17s1titulos2":
        "Facilitamos el acceso de los estudiantes a numerosas ofertas de prácticas en empresas de toda España para que vivan una experiencia profesional única."  
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p17s1Img: require("@/assets/images/banners/banner7.jpg")
    };
  },
  computed: {
    p17s1titulos() {
      return this.$t("p17s1titulos");
    }
  }
};
</script>

<style lang="scss">
.p17s1fondoFwhite {
  h2 {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    background: #00000033;
    border-radius: 1em;
    padding: 1em 0;
  };
  h3 {
    font-family: "Lato Light", sans-serif !important;
    color: whitesmoke;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 1em;
    padding: 1em;
  };
  color: white;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: top center;
}
</style>