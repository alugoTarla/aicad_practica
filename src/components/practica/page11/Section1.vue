<template>
  <div id="section1">
    <div class="p11s1fondoFwhite">
      <b-container fluid>
        <br />
        <b-row align-v="center" align-h="center" v-responsive.md.lg.xl>
          <b-col lg="8" md="8" class="text-left pt-5">
            <br />
            <h1>{{$t("p11s1title1")}}</h1>
            <br />
            <p>{{$t("p11s1title2")}}</p>
            <br />
          </b-col>
        </b-row>
        <b-row align-v="center" v-responsive.sm.xs>
          <b-col sm="12" class="text-center">
            <br />
            <h2>{{$t("p11s1title1")}}</h2>
            <br />
            <p>{{$t("p11s1title2")}}</p>
          </b-col>
        </b-row>
        <br />
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p11s1title1":
      "We are a bridge between universities, students and companies, striving to facilitate the accomplishment of internships",
    "p11s1title2":
      "Register your application by sending your CV, find out about the process and get ready for the interviews that will take you one step closer to finding internships"
  },
  "es":{
    "p11s1title1":
      "Como escuela de negocios somos un puente entre universidades, estudiantes y empresas, que facilita la realización de prácticas en empresas",
    "p11s1title2":
      "Registra tu candidatura enviando tu CV, infórmate sobre el proceso y prepárate para las entrevistas que te llevarán a un paso de encontrar prácticas en empresas"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang="scss">

.p11s1fondoFwhite {
  h1 {
    font-family: "Lato Heavy", sans-serif !important;
    color: whitesmoke;
    text-align: center !important;
    padding: 20px;
    border-radius: 1em;
    margin: 0 auto;
    max-width: 800px;
  };
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url("~@/assets/new_imgs/Banner-contratar-becatios-aicad.jpg");
  min-height: 500px;
  height: auto;
  p {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    text-align: center !important;
    border-radius: 1em;
    padding: 0.5em;
    margin: 0 auto;
    max-width: 800px;
  };
}
</style>
