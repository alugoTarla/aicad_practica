<template>
  <div id="section6">
    <div class="p5sFondo">
      <div class="p18s6imgfondo">
        <div class="p5Video" v-responsive.lg.xl>
          <video autoplay controls loop muted preload style="width: 100%">
            <source :src="p18s6Video" type="video/mp4" />
          </video>
        </div>   
        <div class="p5Img" v-responsive.md.sm.xs>
          <b-img :src="p18s6Img" class="p5Img1"/>
        </div>   
        <b-container fluid>
          <b-container >
            <br />
            <br />
            <b-row align-v="center">
              <b-col cols="12" class="text-center">
                <h2>
                  <div>{{$t("p18s6title1")}}</div>
                  <div>{{$t("p18s6title2")}}</div>                  
                </h2>
                <br>
                <a class="btn buttonTurqueza" :href="p18s6url">
                  <strong>{{$t("p18s6button2")}}</strong>
                </a>
                <div class="buttonfix2">
                  {{$t("p18s6button1")}}
                </div>
              </b-col>
            </b-row>
            <br />
            <br />
          </b-container>
        </b-container>
      </div>      
    </div>
    <div class="green"></div>
  </div>
</template>

<i18n>
{
  "en":{
    "p18s6title1": "Simplify student access to all internship offers",
    "p18s6title2":  "in companies of reputation and career opportunities",
    "p18s6button1": "Become a partner university",
    "p18s6button2": "Contact us"
  },
  "es":{
    "p18s6title1": "Simplifica el acceso de los estudiantes a todas las ofertas",
    "p18s6title2":  "de prácticas en empresas de prestigio y trayectoria",
    "p18s6button1": "CONVIÉRTETE EN UNIVERSIDAD PARTNER",
    "p18s6button2": "CONTÁCTANOS"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p18s6url: "https://jobs.aicad.es",
      p18s6Video: "https://google-my-business.aicad.es/images/video/genesis_480.mp4",
      p18s6Img: "https://www.aicad.es/wp-content/uploads/2015/05/portada-ofertas-trabajo-aicad.jpg"
    }
  }
};
</script>

<style lang="scss">
.p18s6imgfondo{
  h2 {
    font-family: "Lato Heavy", sans-serif !important;
    color: whitesmoke;
    border-radius: 1em;
    padding: 1em;
  };
  p {
    font-family: "Lato Light", sans-serif !important;
    color: whitesmoke;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 1em;
    padding: 1em;
  };
}

</style>
