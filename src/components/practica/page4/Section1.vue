<template>
  <div id="section1">
    <div class="p4s1fondoFwhite">
      <b-container>
        <b-container class="text-center pt-3">
          <br />  
          <h1>{{$t("p4s1Title")}}</h1>
          <p>{{$t("p4s1SubTitle")}}</p>
          <div>
            <div class="buttonfix2">
              <span>{{$t("p4s1Button1")}}</span>
            </div>
            <a class="btn buttonWhite-outline" :href="p4s1url">
              <span>
                <strong>&nbsp;{{$t("p4s1Button2")}}</strong>
              </span>
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
    "p4s1Title":
      "Internship agreement in companies: What you need to know to hire an intern",
    "p4s1SubTitle":
      "Here we present everything you should know about internship agreements in companies and the social security contribution of interns",
    "p4s1Button1": "If you have any doubts about internship procedures",
    "p4s1Button2": "CLICK HERE"
  },
  "es":{
    "p4s1Title":
      "Convenio de prácticas en empresas: Lo que necesitas saber para contratar un becario",
    "p4s1SubTitle":
      "Aquí te presentamos todo lo que debes saber sobre convenios de prácticas en empresas y la cotización a la seguridad social de becarios",
    "p4s1Button1": "Si tienes dudas sobre algún tipo de trámite de becarios",
    "p4s1Button2": "HAZ CLIC AQUÍ"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p4s1url: "https://jobs.aicad.es"
    };
  }
};
</script>

<style lang="scss">
.p4s1fondoFwhite {
  h1 {
    color: whitesmoke;
    padding: 0.5em;
  }
  p {
    color: whitesmoke;
    padding: 1em;
  }
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: center left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5)),
    url("~@/assets/new_imgs/Banner-convenio-prácticas.jpg");
  vertical-align: middle;
  min-height: 500px;
}
</style>
