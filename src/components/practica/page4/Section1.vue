<template>
  <div id="section1">
    <div class="p4s1fondoFwhite">
      <div class="wrapper">
        <b-container>
          <b-container class="text-center">
            <br />
            <b-row align-v="center">
              <b-col>
                <b-row align-v="center" align-h="center">
                  <b-col sm="12" md="10" lg="8">
                    <br />
                    <h2>{{$t("p4s1Title")}}</h2>
                    <br />
                    <h3>{{$t("p4s1SubTitle")}}</h3>
                    <br />
                    <a class="btn buttonWhite" :href="p4s1url">
                      <span>{{$t("p4s1Button1")}}</span>
                      <span>
                        <strong>&nbsp;{{$t("p4s1Button2")}}</strong>
                      </span>
                    </a>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
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

<style>
.p4s1fondoFwhite {
  color: white;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0);
  background-image: url("~@/assets/images/banners/banner3.jpg");
  vertical-align: middle;
}
</style>
