<template>
  <div id="section4">
    <div class="p5sFondo">
      <div class="p7s4fondoFwhite">
        <div class="p5Video" v-responsive.lg.xl>
          <video autoplay controls loop muted preload style="width: 100%">
            <source :src="p7s4Video" type="video/mp4" />
          </video>
        </div>   
        <div class="p5Img" v-responsive.md.sm.xs>
          <b-img :src="p7s4Img" class="p5Img1"/>
        </div>   
        <b-container fluid>
          <b-container class="pt-5 pb-5">
            <br />
            <b-row align-v="center" align-h="center">
              <b-col md="9" sm="10" class="text-center">
                <h1>{{$t("p7s4title1")}}</h1>
                <h3>{{$t("p7s4title2")}}</h3>
                <br>
                <a class="btn buttonWhite-outline" :href="p7s4url">
                  {{$t("p7s4button1")}}
                  &nbsp;
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </a>
              </b-col>
            </b-row>
            <br />
          </b-container>
        </b-container>
      </div>      
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p7s4title1": "Finding talent is now easy!",
    "p7s4title2":  "Publish your ads without any limit and position them to optimize their promotion and dissemination both in job boards and in study centers.",
    "p7s4button1": "Join our Premium services!"
  },
  "es":{
    "p7s4title1": "¡Encontrar talento ahora es fácil!",
    "p7s4title2":  "Publica tus anuncios sin ningún límite y posiciónalos para optimizar su promoción y difusión tanto en bolsas de trabajo como en centros de estudios.",
    "p7s4button1": "¡Únete a nuestros servicios Premium!"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p7s4url: "#",
      p7s4Video: "https://google-my-business.aicad.es/images/video/genesis_480.mp4",
      p7s4Img: "https://www.aicad.es/wp-content/uploads/2015/05/portada-ofertas-trabajo-aicad.jpg"
    } 
  }
};
</script>

<style lang="scss">
.p7s4fondoFwhite {
  color: whitesmoke;
  h1 {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 1em;
    padding: 0.3em;
  };
  h3 {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 1em;
    padding: 0.3em 1em;
  };
}

.buttonWhite-outline svg.svg-inline--fa.fa-angle-right.fa-w-8 {
  visibility: hidden;
}

.buttonWhite-outline:hover svg.svg-inline--fa.fa-angle-right.fa-w-8 {
  visibility: visible;
}
</style>
