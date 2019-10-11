<template>
  <div id="section1">
    <div class="p10s1fondoFwhite">
      <b-container fluid>
        <br />
        <b-row align-v="center" align-h="center" v-responsive.md.lg.xl>
          <b-col lg="8" md="8" class="text-left">
            <br />
            <h2>{{$t("p10s1title1")}}</h2>
            <br />
            <p>{{$t("p10s1title2")}}</p>
            <br />
          </b-col>
        </b-row>
        <b-row align-v="center" v-responsive.sm.xs>
          <b-col sm="12" class="text-center">
            <br />
            <h2>{{$t("p10s1title1")}}</h2>
            <br />
            <p>{{$t("p10s1title2")}}</p>
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
    return {
    };
  }
};
</script>

<style lang="scss">
.p10s1fondoFwhite {  
  h2 {
    font-family: "Lato Medium", sans-serif !important;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 1em;
    padding: 1em;
  };
  p {
    font-family: "Lato Light", sans-serif !important;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 1em;
    padding: 1em;
  };
  color: white;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0);
  background-image: url("~@/assets/images/banners/banner6.jpg");
  vertical-align: middle;
}
</style>
