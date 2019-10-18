<template>
  <div id="section1">
    <div class="p7s1fondoFwhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>{{$t("p7s1title1")}}</h2>
          <br />
          <p>{{$t("p7s1title2")}}</p>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template> 

<i18n>
{
  "en":{
    "p7s1title1":
      "During our practice, we have provided support and advice to hundreds of companies, SMEs and hotels to get the best candidates and fellows and choose the most qualified ones through pre-selection processes of interns.",
    "p7s1title2":
      "Contact our team of expert consultants to receive advice, and allow us to help you find the most suitable internship student for your company"
  },
  "es":{
    "p7s1title1":
      "En nuestra trayectoria hemos brindado apoyo y asesoría a cientos de empresas, pymes y hoteles para conseguir a los mejores candidatos y becarios y elegir a los más capacitados a través de procesos de preselección de estudiantes de prácticas en empresas",
    "p7s1title2":
      "Contacta con nuestro equipo de consultores expertos para recibir asesoría, y permítenos ayudarte a encontrar al estudiante de prácticas más idóneo para tu empresa"
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
.p7s1fondoFwhite {
  h2 {
    color: whitesmoke;
    padding: 1em;
  }
  p {
    color: whitesmoke;
    padding: 0.5em;
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5)), url("~@/assets/new_imgs/Banner-membresia-vip2.jpg");
  min-height: 500px;
}
</style>
