<template>
  <div id="section7">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <br />
          <b-row>
            <b-col md="6" sm="12">
              <hr class="hrFondo" />
              <h3>{{$t("p5s7title1")}}</h3>
              <br>
              <p>{{$t("p5s7desc1")}}</p>
              <p>{{$t("p5s7desc1")}}</p>
            </b-col>
            <b-col md="6" sm="12">
              <b-img :src="p5s7img" class="p5Imagenes"></b-img>
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
    "p5s7title1": "5. We enrich the content of the internship offers in companies with the best Keywords to gain rapid impact",
    "p5s7desc1":
      "Every internship offer in companies or employment must be so attractive and visually aesthetic with a clean design that generates confidence and motivates you to register.",
    "p5s7desc2":
      "The copy writer team of our offices create the content of job offers or internships in companies to make them interesting, easy to read, thus encouraging interest in applying to the offer."
  },
  "es":{
    "p5s7title1": "5. Enriquecemos el contenido de las ofertas de prácticas en empresas con las mejores Keywords para ganar impacto rápido",
    "p5s7desc1":
      "Cada oferta de prácticas en empresas o empleo debe ser tan atractiva y visualmente estética con un diseño limpio que genere confianza y motive a registrarse.",
    "p5s7desc2":
      "El equipo copy writer de nuestras oficinas crean el contenido de las ofertas de empleo o prácticas en empresas para hacerlas interesantes, fáciles leer, fomentando así el interés en aplicar a la oferta."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5s7img: require("@/assets/images/banners/page5/empresas-keyword.jpg")
      // p5s7img: require("@/assets/images/banners/keywords.jpg")
    };
  }
};
</script>
