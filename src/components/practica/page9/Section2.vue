<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <b-row>
            <b-col lg="2" md="3" sm="4"
              v-for="(item, idx) in p9s2items" :key="idx">
              <div style="padding: 1em;" 
                  v-b-tooltip="{ customClass: 'my-tooltip-class' }" :title="item.p9s2title">
                <a :href="item.p9s2url" class="if-image">
                <b-img :src="item.p9s2img" ></b-img>  
                </a>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      p9s2items: [
        {
          p9s2title: "Università Cattolica di Milano",
          p9s2img: require("@/assets/images/universidad/cattolica-milano.jpg"),
          p9s2url: "http://www.unicatt.it/"
        },
        {
          p9s2title: "Universidad Camilo José Cela",
          p9s2img: require("@/assets/images/universidad/UCJC.jpg"),
          p9s2url: "http://www.ucjc.edu/"
        },
        {
          p9s2title: "Universidad de Deusto",
          p9s2img: require("@/assets/images/universidad/deusto.png"),
          p9s2url: "http://www.deusto.es"
        },
        {
          p9s2title: "Università della Valle d’Aosta",
          p9s2img: require("@/assets/images/universidad/universita-della-valle-daosta.jpg"),
          p9s2url: "https://www.univda.it/"
        },
        {
          p9s2title: "Universität Heidelberg",
          p9s2img: require("@/assets/images/universidad/uni_heidelberg-1.jpg"),
          p9s2url: "https://www.uni-heidelberg.de/"
        },
        {
          p9s2title: "Universidad de Navarra",
          p9s2img: require("@/assets/images/universidad/navarra.png"),
          p9s2url: "https://www.unav.edu/"
        },
        {
          p9s2title: "Universidad politecnica de Valencia",
          p9s2img: require("@/assets/images/universidad/up-valencia.png"),
          p9s2url: "https://www.upv.es/"
        },
        {
          p9s2title: "Istituto di Mediazione Linguistica di Perugia",
          p9s2img: require("@/assets/images/universidad/ssml.png"),
          p9s2url: "http://www.mediazionelinguisticaperugia.it/"
        },
        {
          p9s2title: "Universitá Milano Bicocca",
          p9s2img:
            "https://www.ies-consulting.es/archivos/uploads/2016/06/uni.jpg",
          p9s2url: "http://www.unimib.it/go/101/Home/Italiano"
        },
        {
          p9s2title: "Ruhr Universität Bochum",
          p9s2img: require("@/assets/images/universidad/milano-bicocca.jpg"),
          p9s2url: "https://www.rub.de/"
        },
        {
          p9s2title: "Universidad de Valencia",
          p9s2img: require("@/assets/images/universidad/rub.jpg"),
          p9s2url: "http://www.uv.es"
        },
        {
          p9s2title: "Universidad politecnica de Valencia",
          p9s2img: require("@/assets/images/universidad/valencia.png"),
          p9s2url: "https://www.upv.es/"
        }
      ]
    }
  }
};
</script>

<style>
.my-tooltip-class > div{
  font-size: 1.1em !important;
  font-weight: 500;
}
</style>
