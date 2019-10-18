<template>
  <div id="section1">
    <div class="p11s1fondoFwhite">
      <b-container fluid>
        <b-container class="text-center pt-3">
        <h1>{{$t("p11s1title1")}}</h1>
        <br />
        <p>{{$t("p11s1title2")}}</p>
        <br />
        </b-container>
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
    color: whitesmoke;
    padding: 1em 0.5em 0;
  };
  p {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    padding-top: 0.5em;
  };
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5)), url("~@/assets/new_imgs/Banner-contratar-becatios-aicad.jpg");
  min-height: 500px;
}
</style>
