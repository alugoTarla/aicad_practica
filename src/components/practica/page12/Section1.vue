<template>
  <div id="section1">
    <div class="p13s1fondoFwhite">
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
</template>

<i18n>
{
  "en":{
    "p13s1Title":
      "Questions and Answers"
  },
  "es":{
    "p13s1Title":
      "Preguntas y Respuestas"
  }
}
</i18n>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.p13s1fondoFwhite {
  h1 {
    font-size: 4rem !important;
    padding: 1em;
  }
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5)),
    url("~@/assets/images/banners/banner_p4_1.jpg");
  min-height: 500px;
}
</style>
