<template>
  <div id="section8">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row>
            <b-col md="6" sm="12" class="text-left" order-sm="2" order-md="2">
              <hr class="hrFondo" />
              <h3 class="text-justify">{{$t("p5s8title1")}}</h3>
              <p class="text-justify">{{$t("p5s8desc1")}}</p>
              <br />
              <p class="text-justify">{{$t("p5s8desc2")}}</p>
            </b-col>
            <b-col md="6" sm="12" order-sm="1" order-md="1">
              <b-img :src="p5s8img" class="p5Imagenes"></b-img>
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
    "p5s8title1": "6. Our professional and multinational team translates the offers into the languages of interest",
    "p5s8desc1":
      "For convenience, in general, we like to be spoken in our language and what better way to look for trainees; For example, to get a German student for an internship in German, it is best that you publish an ad in your mother tongue",
    "p5s8desc2":
      "For these reasons, all our offers in VIP membership benefit from authentic translations that only our team of natives can offer to a text."
  },
  "es":{
    "p5s8title1": "6. Un equipo experto y multinacional traduce las ofertas a los idiomas de interés",
    "p5s8desc1":
      "Por comodidad, en general, nos gusta que nos hablen en nuestro idioma y qué mejor manera de buscar alumnos en prácticas; por ejemplo, para conseguir un estudiante alemán para un puesto de prácticas en alemán, lo mejor es que publicando un anuncio en su idioma materno",
    "p5s8desc2":
      "Por estas razón, todas nuestras ofertas en membresía VIP gozan traducciones con la autenticidad que sólo nuestro equipo de nativos puede ofrecer a un texto."
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5s8img: require("@/assets/images/banners/page5/P2XMQ4R.jpg")
      // p5s8img: require("@/assets/images/banners/Copia-di-DSC_2664-big-1.jpg")
    };
  }
};
</script>
