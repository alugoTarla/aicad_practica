<template>
  <div id="section6">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row>
            <b-col md="6" sm="12" class="text-left" order-sm="2" order-md="2">
              <hr class="hrFondo" />
              <h3 class="text-justify">{{$t("p5s6title1")}}</h3>
              <p class="text-justify">{{$t("p5s6desc1")}}</p>
              <br />
              <p class="text-justify">{{$t("p5s6desc2")}}</p>
            </b-col>
            <b-col md="6" sm="12" order-sm="1" order-md="1">
              <b-img :src="p5s6img" class="p5Imagenes"></b-img>
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
    "p5s6title1": "4. We optimize the online positioning of offers",
    "p5s6desc1":
      "If you go to Google and search for “online courses with internships” you will surely see the results of ours in the first places. How do we do it? Both the work of SEO on page and SEO off page is the key to positioning content with authority in Google.",
    "p5s6desc2":
      "Our digital marketing team does everything possible so that when searched, your offer will be among the first suggested links, attracting a larger amount of candidates interested in applying."
  },
  "es":{
    "p5s6title1": "4. Optimizamos el posicionamiento online de las ofertas",
    "p5s6desc1":
      "Si vas a Google y buscas “cursos online con prácticas” seguramente verás en los resultados nuestros en los primeros lugares ¿Cómo lo hacemos?, tanto el trabajo de SEO on page como el SEO off page es clave para posicionar contenido con autiridad en Google.",
    "p5s6desc2":
      "Nuestro equipo de marketing digital hace todo lo posible para que si alguien busca, por poner un ejemplo, “prácticas de marketing en Madrid” tu oferta sea una de los primeros enlaces sugeridos y tengamos candidatos interesados en aplicar."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5s6img: require("@/assets/images/banners/estadisticas.jpg")
    };
  }
};
</script>
