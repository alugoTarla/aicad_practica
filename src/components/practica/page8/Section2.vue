<template>
  <div id="section2">
    <div class="wrapper">
      <div class="fondoWhite">
        <b-container fluid>
          <b-container>
            <br />
            <b-row align-v="start">
              <b-col md="9">
                <br>
                <h2>
                  <span>{{$t("p8s2title")}}</span>
                  <strong>{{$t("p8s2titleS")}}</strong>
                </h2>
                <br>
                <b-row>
                  <b-col md="6" sm="12" 
                  v-for="(item, idx) in p8s2list" :key="idx">
                    <div class="d-flex align-items-center">
                      <div class="p-1 text-center" style="width: 20%">
                        <b-img :src="p8s2listI[idx].p8s2icon" class="p8iconos"></b-img>
                      </div>
                      <div class="p-1 text-justify " style="width: 80%">
                        <h4><strong>{{item.p8s2title}}</strong></h4>
                      </div>                      
                    </div>
                     <div class>
                      <div class="p8s2p text-justify" 
                        v-for="(item1, idx1) in item.p8s2descrip" :key="idx1">
                        {{item1.p8s2line}}
                      </div>
                    </div>
                    <br>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6" sm="12" 
                  v-for="(item, idx) in p8s2list" :key="idx">                   
                    <div class="text-center">
                    <a class="btn buttonTurqueza" :href="item.p8s1url">
                      {{item.p8s2boton}}
                      <strong>{{item.p8s2botonS}}</strong>
                    </a>
                    </div>
                    <br>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="3" class="text-center">
                <itg :idinstagram="idi" />
              </b-col>
            </b-row>
            <br />
          </b-container>
        </b-container>
        <br />
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p8s2title": "What you should know to do "
    , "p8s2titleS": "internships in companies in Spain"
    , "p8s2list": [
      {
        "p8s2title": "internships in companies in Spain"
      , "p8s2descrip": [
        {
          "p8s2line": "Madrid, Canary Islands, Barcelona, Andalusia, the Mediterranean Coast ... These are some of the most attractive destinations in the European country. You will not only live an influential experience, but you will also experience cultural exchange, most pleasant climate, will interact with beautiful people, unique gastronomy, art, history, monuments and nature."
        }
      ]
      , "p8s2boton": "Detailed information on"
      , "p8s2botonS": "Internships in Spain"
      , "p8s2url": "#"
      },
      {
        "p8s2title": "Companies and internships"
      , "p8s2descrip": [
        {
          "p8s2line": "You will have the opportunity to meet new people in your professional area, having different ways of working, refreshing ideas and a great capacity to take initiative and be productive. You will get to know the corporate culture in areas such as marketing, international trade or customer service."
        }
      ]
      , "p8s2boton": "Check the internship offers at",
        "p8s2botonS": "Companies in Spain"
      , "p8s2url": "#"
      }
    ]
  },
  "es":{
    "p8s2title": "Lo que debes saber para realizar "
    , "p8s2titleS": "prácticas en empresas en España"
    , "p8s2list": [
      {
        "p8s2title": "Un gran destino turístico con un clima excelente"
      , "p8s2descrip": [
        {
          "p8s2line": "Madrid, Islas Canarias, Barcelona, Andalucía, la Costa Mediterránea… Estos son algunas de los destinos más atractivos del país europeo. Vivirás no solo de una experiencia formativa, sino también experimentarás el intercambio cultural, el agradable clima, la interacción con su gente, la gastronomía, su arte, su historia y monumentos y la naturaleza, de primera mano, brindándote una vivencia única."
        }
      ]
      , "p8s2boton": "Información detallada sobre"
      , "p8s2botonS": "Prácticas en España"
      , "p8s2url": "#"
      },
      {
        "p8s2title": "Las empresas y las ofertas de prácticas en empresas"
      , "p8s2descrip": [
        {
          "p8s2line": "Tendrás la oportunidad de conocer gente nueva en tu área profesional, con distintas formas de trabajar, ideas refrescantes y una gran capacidad para tomar iniciativa y ser productivos. Conocerás de primera mano la cultura corporativa en áreas como marketing, comercio internacional o customer service. "
        }
      ]
      , "p8s2boton": "Consulta las ofertas de prácticas en",
        "p8s2botonS": "Empresas en España"
      , "p8s2url": "#"
      }
    ]
  }
}
</i18n>

<script>
import itg from "@/components/utils/instagram";
export default {
  components:{
    itg
  },
  data() {
    return {
      p8s2listI: [
        {
          p8s2icon: require("@/assets/images/iconos/page8/destino.png")
        },
        {
          p8s2icon: require("@/assets/images/iconos/page8/practicas.png")
        }
      ]
      , idi: "B1Uq74jnWZw"
    }
  },
  computed: {
    p8s2list() {
      return this.$t("p8s2list");
    }
  }
};
</script>

<style>
.p8s2h1d {
  display: table-cell;
  vertical-align: middle;
  padding: 0.2rem;
  text-align: left;
}

.p8s2h1 {
  font-size: 1em;
  font-weight: bold;
}
.p8s2p {
  font-size: 1em;
  padding: 0.5em 0;
}
</style>
