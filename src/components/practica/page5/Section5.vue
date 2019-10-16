<template>
  <div id="section5">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row>
            <b-col md="6" sm="12" class="text-left">
              <hr class="hrFondo" />
              <h3 class="text-justify">{{$t("p5s5title1")}}</h3>
              <p class="text-justify">{{$t("p5s5desc1")}}</p>
              <br />
              <p class="text-justify">{{$t("p5s5desc2")}}</p>
            </b-col>
            <b-col md="6" sm="12">
              <b-img :src="p5s5img" class="p5Imagenes"></b-img>
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
    "p5s5title1": "3. Each offer will be visible on Google in record time",
    "p5s5desc1":
      "We will help you to get to the top search places for all your internship offers, so that they have the space they deserve on the Internet.",
    "p5s5desc2":
      "Each job or internship offer in companies will have its own SEO-friendly URL that makes it susceptible to being found in search-engines and being shared on social networks."
  },
  "es":{
    "p5s5title1": "3. Cada oferta será visible en Google en tiempo record",
    "p5s5desc1":
      "Dependiendo las Keywords que uses, te ayudaremos a subir a los primeros lugares de búsqueda de todas tus ofertas de prácticas, para que tengan el espacio que merecen en Internet.",
    "p5s5desc2":
      "Cada oferta de empleo o prácticas en empresas contará con una url propia y amigable al SEO que la hace susceptible de ser encontrada en buscadores y de ser compartida en redes sociales."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5s5img: require("@/assets/images/banners/page5/Google-tiempo-record.jpg")
      // p5s5img: require("@/assets/images/banners/resenas.jpg")
    };
  }
};
</script>
