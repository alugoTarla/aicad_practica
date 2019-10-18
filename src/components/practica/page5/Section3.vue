<template>
  <div id="section3">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <br />
          <b-row>
            <b-col md="6" sm="12">
              <hr class="hrFondo" />
              <h3>{{$t("p5s3title1")}}</h3>
              <br>
              <p>{{$t("p5s3desc1")}}</p>
              <p>{{$t("p5s3desc2")}}</p>
            </b-col>
            <b-col md="6" sm="12">
              <b-img :src="p5s3img" class="p5Imagenes"></b-img>
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
    "p5s3title1": "1. With your VIP membership you will have the chance to publish all the offers you want in multi-job portals to get to the top of Google",
    "p5s3desc1":
      "Post all the internship offers that you need, for all positions and departments that you want, and as much in advance as you wish.",
    "p5s3desc2":
      "Your VIP membership will enable your access to ad groups enabling you to upload the ads that will help you find interns or employees who have relevant knowledge and experience."
  },
  "es":{
    "p5s3title1": "1. Con tu membresía VIP publicas todas las ofertas que quieras en multiportales de empleo para estar en los primeros lugares de Google",
    "p5s3desc1":
      "Publica todas las ofertas de prácticas en empresas que necesites para todas las posiciones y departamentos que desees cubrir con tanta antelación como quieras.",
    "p5s3desc2":
      "Crea grupos de anuncios en varios portales de empleo a los que te permite tu acceso de membresía VIP y sube los anuncios que te ayudarán encontrar alumnos o personal para empleo o de relevo  especializado con meses de antelación."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5s3img: require("@/assets/images/banners/page5/primeros-lugares-de-google.jpg")
      // p5s3img: require("@/assets/images/banners/4.png")
    };
  }
};
</script>
