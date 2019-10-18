<template>
  <div id="section1">
    <div class="p17s1fondoFwhite">
      <b-container fluid>
        <b-container class="text-center pt-1">
          <h1>
            <div v-for="(item, idx) in p17s1titulos" :key="idx">{{item}}</div>
          </h1>
          <p>{{$t("p17s1titulos2")}}</p>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p17s1titulos": [
        "Find out about the benefits we offer to Work and Travel universities and agencies to help the students to find internships in Spain"
      ],
    "p17s1titulos2":
        "We facilitate students’ access to numerous internship offers throughout Spain so they can live a unique professional experience."  
  },
  "es":{
    "p17s1titulos": [
        "Infórmate sobre los beneficios que ofrecemos a las universidades y agenciad de Work and Travel para ayudar a estudiantes a encontrar prácticas profesionales en España"
      ],
    "p17s1titulos2":
        "Facilitamos el acceso de los estudiantes a numerosas ofertas de prácticas en empresas de toda España para que vivan una experiencia profesional única."  
  }
}
</i18n>

<script>
export default {
  data() {
    return {};
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
  h1 {
    color: whitesmoke;
    padding: 1em;
  }
  p {
    color: whitesmoke;
  }
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5)),
    url("~@/assets/images/banners/banner7.jpg");
  min-height: 500px;
}
</style>