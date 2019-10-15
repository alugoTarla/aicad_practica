<template>
  <div id="section">
    <div class="p5sFondo">
      <div>
        <div class="p5Video" v-responsive.lg.xl>
          <video autoplay controls loop muted preload style="width: 100%">
            <source :src="p5sVideo" type="video/mp4" />
          </video>
        </div>   
        <div class="p5Img" v-responsive.md.sm.xs>
          <b-img :src="p5sImg" class="p5Img1"/>
        </div>   
        <b-container fluid>
          <b-container class="pt-5 pb-5">
            <br />
            <b-row align-v="center">
              <b-col cols="12" class="text-center">
                <h1>{{$t("p5stitle1")}}</h1>
                <h3>{{$t("p5stitle2")}}</h3>
                <h3>{{$t("p5stitle3")}}</h3>
                <br>
                <a class="btn buttonWhite-outline" :href="p5surl">
                  {{$t("p5sbutton1")}}
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
    <div class="green"></div>
  </div>
</template>

<i18n>
{
  "en":{
    "p5stitle1": "Find the young talent for internships!",
    "p5stitle2":  "Post unlimited ads and give them priority",
    "p5stitle3":  "Optimize your promotion in universities and JobBoards",
    "p5sbutton1": "Contact us and join the Premium Companies"
  },
  "es":{
    "p5stitle1": "¡Encuentra el talento joven para prácticas!",
    "p5stitle2":  "Publica anuncios sin límite y dales prioridad",
    "p5stitle3":  "Optimiza su promoción en universidades y JobBoards",
    "p5sbutton1": "Contáctanos y únete a las Empresas Premium"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p5surl: "https://jobs.aicad.es",
      p5sVideo: "https://google-my-business.aicad.es/images/video/genesis_480.mp4",
      p5sImg: "https://www.aicad.es/wp-content/uploads/2015/05/portada-ofertas-trabajo-aicad.jpg"
    }
  },
  computed: {
    p5stitle1() {
      return this.$t("p5stitle1");
    },
    p5stitle2() {
      return this.$t("p5stitle2");
    },
    p5stitle3() {
      return this.$t("p5stitle3");
    },
    p5sbutton1() {
      return this.$t("p5sbutton1");
    }
  }
};
</script>

<style>

.buttonWhite-outline svg.svg-inline--fa.fa-angle-right.fa-w-8 {
  visibility: hidden;
}

.buttonWhite-outline:hover svg.svg-inline--fa.fa-angle-right.fa-w-8 {
  visibility: visible;
}
</style>
