<template>
  <div id="section1">
    <div class="p3s1fondoWhite">
      <div class="wrapper">
        <b-container fluid>
          <b-container class="text-center">
            <br />
            <h1 class="p3s1h2">{{$t("p3s1Title")}}</h1>
            <br />
            <h2 class="p3s1h2">{{$t("p3s1SubTitle")}}</h2>
            <br />
            <a class="btn buttonTurqueza" :href="s1url">
              {{$t("p3s1Button1")}}
              <br />
              <strong>{{$t("p3s1Button2")}}</strong>
            </a>
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
      s1url: "#"
    };
  }
};
</script>

<style>
.p3s1h2 {
  font-family: "Lato Heavy", sans-serif !important;
  color: whitesmoke;
  background: rgba(200, 200, 200, 0.4);
  border-radius: 1em;
  padding: 1em;
}

.p3s1fondoWhite {
  color: white;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0);
  background-image: url("~@/assets/new_imgs/Banner-unete.jpg");
  padding: 2rem 0;
  vertical-align: middle;
}
</style>
