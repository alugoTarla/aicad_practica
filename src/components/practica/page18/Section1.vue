<template>
  <div id="section1">
    <div class="p18s1fondoWhite">
      <b-container fluid>
        <b-container class="text-center pt-3">
          <h1>
            <div v-for="(item, idx) in p18s1Title" :key="idx">{{item}}</div>
          </h1>
          <p>
            <span v-for="(item, idx) in p18s1SubTitle" :key="idx">
              <strong v-if="item.txtS">{{item.txt}}</strong>
              <span v-else>{{item.txt}}</span>
            </span>
          </p>
          <div>
            <div class="buttonfix2">{{$t("p18s1Button1")}}</div>
              <a class="btn buttonTurqueza" :href="p18s1url">
                <strong>{{$t("p18s1Button2")}}</strong>
              </a>
          </div>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p18s1Title": [
      "Simplify student access to all internship offers in companies of reputation and career opportunities"
    ]
    , "p18s1SubTitle": [
      {
        "txtS": false,
        "txt":
          "At AICAD Business School we not only support university students to find internships but also facilitate the procedures of the internship agreement."
      }
    ],
    "p18s1Button1": "Become a partner university",
    "p18s1Button2": "Contact us"
  },
  "es":{
    "p18s1Title": [
      "Simplifica el acceso de los estudiantes a todas las ofertas de prácticas en empresas de prestigio y trayectoria"
    ]
    , "p18s1SubTitle": [
      {
        "txtS": false,
        "txt":
          "En AICAD Business School le brindamos apoyo a los estudiantes universitarios para que encuentren prácticas en empresas y facilitamos los trámites del convenio de prácticas."
      }
    ],
    "p18s1Button1": "CONVIÉRTETE EN UNIVERSIDAD PARTNER",
    "p18s1Button2": "CONTÁCTANOS"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p18s1url: "https://jobs.aicad.es"
    };
  },
  computed: {
    p18s1Title() {
      return this.$t("p18s1Title");
    },
    p18s1SubTitle() {
      return this.$t("p18s1SubTitle");
    }
  }
};
</script>

<style lang="scss">
.p18s1fondoWhite {
  h1 {
    color: whitesmoke;
    padding: 0.6em;
  };
  p {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    padding: 0.5em;
  };
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5)),
    url("~@/assets/images/banners/banner8.jpg");
  min-height: 500px;
}
</style>
