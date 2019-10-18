<template>
  <div id="section1">
    <div class="p10s1fondoFwhite">
      <b-container fluid>
        <b-container class="text-center pt-3">
          <br />
          <b-row align-v="center" align-h="center">
            <b-col md="8" sm="12">
              <br />
              <h1>{{$t("p10s1title1")}}</h1>
              <br />
              <p>{{$t("p10s1title2")}}</p>
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
    "p10s1title1":
      "We are the link between students, universities and companies, facilitating internships in companies with the best agreements",
    "p10s1title2":
      "Contact our team of consultants and experts to receive advice, and let us help you find the right intern for your company"
  },
  "es":{
    "p10s1title1":
      "Somos el enlace entre los estudiantes, las universidades y las empresas,  facilitando las prácticas en empresas de becarios con los mejores convenios",
    "p10s1title2":
      "Contacta con nuestro equipo de consultores y expertos para recibir asesoría,  y permítenos ayudarte a encontrar al estudiante de prácticas en empresas idóneo para tu empresa"
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
.p10s1fondoFwhite {
  h1 {
    color: whitesmoke;
    padding: 20px;
  }
  p {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    padding: 0.5em;
  }
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: bottom center;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5)),
    url("~@/assets/new_imgs/recruiters-and-job-applicant-P29WVWZ.jpg");
  min-height: 500px;
}
</style>
