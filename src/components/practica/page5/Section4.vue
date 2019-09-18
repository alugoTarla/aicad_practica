<template>
  <div id="section4">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row>
            <b-col md="6" sm="12" class="text-left" order-sm="2" order-md="2">
              <hr class="hrFondo" />
              <h3 class="text-justify">{{$t("p5s4title1")}}</h3>
              <p class="text-justify">{{$t("p5s4desc1")}}</p>
              <br />
              <p class="text-justify">{{$t("p5s4desc2")}}</p>
            </b-col>
            <b-col md="6" sm="12" order-sm="1" order-md="1">
              <b-img :src="p5s4img" class="p5Imagenes"></b-img>
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
    "p5s4title1": "2. With your VIP membership we help you to spread all your internship or employment offers on recognized JobBoards and social networks",
    "p5s4desc1":
      "Our digital marketing and communication team will help you improve your visibility on the Internet through our portals dedicated exclusively to the publication of job advertisements and internships.",
    "p5s4desc2":
      "All offers with VIP membership have exclusive support and accelerated promotion and search of the needed positions, be theminterns or professional staff."
  },
  "es":{
    "p5s4title1": "2. Con tu membresía VIP te ayudamos a dinfundir en JobBoards reconocidos y redes sociales todas tus ofertas de prácticas o empleo",
    "p5s4desc1":
      "Nuestro equipo de marketing digital y comunicación te ayudará a tener presencia y visibilidad en Internet a través de nuestros portales dedicados exclusivamente a la publicación de anuncios de empleo y prácticas en empresas.",
    "p5s4desc2":
      "Todas las ofertas con membresía VIP tienen un soporte exclusivo para ir más rápido en la promoción y búsqueda del personal que necesitas sean becarios o personal especializado."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5s4img: require("@/assets/images/banners/panel-de-control.jpg")
    };
  }
};
</script>
