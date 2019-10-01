<template>
  <div id="section1">
    <div class="p13s1fondoFwhite">
      <div class="wrapper">
        <b-container>
          <b-container class="text-center">
            <br />
            <b-row align-v="center" align-h="center">
              <b-col sm="12" md="10" lg="9">
                <br />
                <br />
                <br />
                <h1>{{$t("p13s1Title")}}</h1>
                <br />     
                <br /> 
                <br />              
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
    "p13s1Title":
      "Internship Contract: Questions and Answers"
  },
  "es":{
    "p13s1Title":
      "Contrato de becario: preguntas y respuestas"
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

<style>
.p13s1fondoFwhite {
  color: white;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0);
  background-image: url("~@/assets/images/banners/banner_p4_1.jpg");
  vertical-align: middle;
}
</style>
