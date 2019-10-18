<template>
  <div id="section1">
    <div class="p3s1fondoWhite">
      <b-container fluid>
        <b-container class="text-center pt-3">
          <h1>{{$t("p3s1Title")}}</h1>
          <br />
          <p>{{$t("p3s1SubTitle")}}</p>
          <br />
          <a class="btn buttonTurqueza" :href="s1url">
            {{$t("p3s1Button1")}}
            <br />
          </a>
          <div class="buttonfix2">
            <strong>{{$t("p3s1Button2")}}</strong>
          </div>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p3s1Title": "Take the first step and join the AICAD experience!",
    "p3s1SubTitle": "We believe in your potential and we want you to be part of our team to help us grow and strengthen your professional career.",
    "p3s1Button1": "START WORKING",
    "p3s1Button2": "WITH OUR TEAM"
  },
  "es":{
    "p3s1Title": "¡Da el primer paso y únete a la experiencia AICAD!",
    "p3s1SubTitle": "Conocemos tu potencial y deseamos que formes parte de nuestro equipo para ayudarnos a crecer y para potenciar tu carrera profesional.",
    "p3s1Button1": "COMIENZA A TRABAJAR",
    "p3s1Button2": "CON NUESTRO EQUIPO"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      s1url: "https://jobs.aicad.es"
    };
  }
};
</script>

<style lang="scss">

.p3s1fondoWhite {
  h1 {
    color: whitesmoke;
    padding: 1em;
  }
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5)),
    url("~@/assets/new_imgs/Banner-unete.jpg");
  vertical-align: middle;
  min-height: 500px;
}
</style>
