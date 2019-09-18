<template>
  <div id="section11">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row>
            <b-col md="6" sm="12" class="text-left">
              <hr class="hrFondo" />
              <h3 class="text-justify">{{$t("p5s11title1")}}</h3>
              <p class="text-justify">{{$t("p5s11desc1")}}</p>
              <br />
              <p class="text-justify">{{$t("p5s11desc2")}}</p>
            </b-col>
            <b-col md="6" sm="12">
              <b-img :src="p5s11img" class="p5Imagenes"></b-img>
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
    "p5s11title1": "9. We promote and manage internship and employment offers via Multichannel",
    "p5s11desc1":
      "We live in the era of multichannel systems and multichannel societies. This means that students seek internship and employment opportunities in different media or channels to reach better opportunities. For this reason, our media strategy is revolutionary on the Internet, we use very advanced search and publication methodologies to achieve the objective.",
    "p5s11desc2":
      "Having advanced publication and search methodologies, using algorithms, keywords, employment directories, social networks, rss, Intranets, etc., positions us as a reference and strategic partner for our VIP members."
  },
  "es":{
    "p5s11title1": "9. Promocionamos y gestión de ofertas de prácticas y empleo en Multicanal",
    "p5s11desc1":
      "Vivimos en la era de sisteamas multicanal y sociedades multicanal. Esto quiere decir que los alumnos buscan oportunidades de prácticas y empleo en diferentes medios o canales para asegurarse mejores opciones; por esta razón, nuestra estrategia de medios es revolucionaria en internet, usamos metodologías muy avanzadas en búsqueda y publicación para conseguir el objetivo.",
    "p5s11desc2":
      "Tener metodologías de publicación y búsqueda avanzada, usando algoritmos, keywords, directorios de empleo, redes sociales, rss, Intranets, etc, nos posiciona como un referente y socio estratégico para nuestros miembros VIP"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5s11img: require("@/assets/images/banners/Multicanal.jpg")
    };
  }
};
</script>
