<template>
  <div id="section1">
    <div class="p6s1fondoFwhite">
      <b-container fluid>
        <b-container>
        <b-row align-v="center" align-h="center">
          <b-col md="10" sm="12" class="text-center">
            <br />
            <h1>
              {{$t("p6s1title1")}}
              <br />
              {{$t("p6s1title2")}}
            </h1>
            <br />
            <p>{{$t("p6s1title3")}}</p>
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
    "p6s1title1": "AICAD Business School,",
    "p6s1title2":
      "We coordinate and manage mobility programs and European funds for universities and trusted companies and long experience around Europe.",
    "p6s1title3":
      "If you are organizing a group of students through international scholarships, contact us for the best advice and successfully organize all mobility programs, accommodation, Eramus + scholarships, cultural visits and more. Consult with our advisors and coordinators to manage all activities and facilitate the work."
  },
  "es":{
    "p6s1title1": "AICAD Business School,",
    "p6s1title2":
      "Coordinamos y gestionamos programas de movilidad y fondos europeos para casos de estudio y universidades en Europa con empresas de confianza y larga trayectoria",
    "p6s1title3":
      "Si estás organizando un grupo de estudiantes por medio de becas internacionales, contáctanos para obtener el mejor asesoramiento y organizar exitosamente todos los programas de movilidad, alojamiento, becas Eramus+, visitas culturales y más. Consulta con nuestros asesores y coordinadores para gestionar todas las actividades y facilitar el trabajo."
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
.p6s1fondoFwhite {
  h1 {
    color: whitesmoke;
    padding: 1em;
  };
  p {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
  };
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5)), url("~@/assets/new_imgs/Banner-membresia-vip2.jpg");
  // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url("~@/assets/new_imgs/Banner-prácticas-empresa.jpg");
  min-height: 500px;
}
</style>
