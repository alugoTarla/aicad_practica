<template>
  <div id="section9">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row>
            <b-col md="6" sm="12" class="text-left">
              <hr class="hrFondo" />
              <h3 class="text-justify">{{$t("p5s9title1")}}</h3>
              <p class="text-justify">{{$t("p5s9desc1")}}</p>
              <br />
              <p class="text-justify">{{$t("p5s9desc2")}}</p>
            </b-col>
            <b-col md="6" sm="12">
              <b-img :src="p5s9img" class="p5Imagenes"></b-img>
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
    "p5s9title1": "7. With VIP membership you ensure that your offers are published in a multitude of portals and international academic institutions",
    "p5s9desc1":
      "To reach the student audience, we distribute the internship offers on a multitude of University portals to better access the labor world.",
    "p5s9desc2":
      "The task of publications is demanding and tedious. It requires time and energy to access hundreds of intranets. Our experienced recruiters take over these concerns, ensuring successful talent search."
  },
  "es":{
    "p5s9title1": "7. Con la membresía VIP, nos encargamos de publicar en multitud de portales e instituciones académicas internacionales",
    "p5s9desc1":
      "Para llegar al público estudiantil transmitimos las ofertas de prácticas en empresas en multitud de plataformas que cada Universidad ha creado para promover el acceso al mundo laboral.",
    "p5s9desc2":
      "La labor de publicación es exigente y tediosa, nos exige publicar en cientos de intranets que, tras años de realización, se les da bastante bien a nuestros recruiters nativos."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5s9img: require("@/assets/images/banners/Image1-1-1080x675.jpg")
    };
  }
};
</script>
