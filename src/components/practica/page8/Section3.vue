<template>
  <div id="section3">
    <div class="wrapper">
      <div class="fondoGrisClaro">
        <b-container fluid>
          <b-container>
            <br />
            <b-row align-v="start">
              <b-col md="9">
                <br>
                <h2>
                  <span>{{$t("p8s3title")}}</span>
                  <strong>{{$t("p8s3titleS")}}</strong>
                </h2>
                <br>
                <b-row>
                  <b-col md="6" sm="12" 
                  v-for="(item, idx) in p8s3list" :key="idx">
                    <div class="d-flex align-items-center">
                      <div class="p-1 text-center" style="width: 20%">
                        <b-img :src="p8s3listI[idx].p8s3icon" class="p8iconos"></b-img>
                      </div>
                      <div class="p-1 text-justify " style="width: 80%">
                        <h4><strong>{{item.p8s3title}}</strong></h4>
                      </div>                      
                    </div>
                     <div class>
                      <div class="p8s3p text-justify" 
                        v-for="(item1, idx1) in item.p8s3descrip" :key="idx1">
                        {{item1.p8s3line}}
                      </div>
                    </div>
                    <br>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6" sm="12" 
                  v-for="(item, idx) in p8s3list" :key="idx">                   
                    <div class="text-center">
                    <a class="btn buttonTurqueza" :href="item.p8s1url">
                      {{item.p8s3boton}}
                      <strong>{{item.p8s3botonS}}</strong>
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
    "p8s3title": "What you should know "
    , "p8s3titleS": "about doing internships in France"
    , "p8s3list": [
      {
        "p8s3title": "A cultural and historical reference"
      , "p8s3descrip": [
        {
          "p8s3line": "In addition to being one of the most important economic centers in the world, France is also one of the most popular tourist destinations, with a prominent and successful tourism industry."
        },
        {
          "p8s3line": "If you succeed in the interview, you will have the opportunity to do internships in companies in the city of Paris or even live the experience of learning in the best hotels of the Côte d'Azur."
        }
      ]
      , "p8s3boton": "Detailed information on"
      , "p8s3botonS": "Internships in France"
      , "p8s3url": "#"
      },
      {
        "p8s3title": "Companies and internships"
      , "p8s3descrip": [
        {
          "p8s3line": "To do internships in companies in France, it is necessary that you have a fairly good level of French because, although there are places that receive foreign tourists, national tourism is also maintained. Therefore, managing the language will be a plus that will help you to succeed during the internship."
        },
        {
          "p8s3line": "If you want to do internships in companies in areas such as marketing, business or administrative, you must meet certain requirements and prepare for interviews, which will be demanding because companies are quite selective."
        }
      ]
      , "p8s3boton": "Check the internship offers at",
        "p8s3botonS": "Companies in France"
      , "p8s3url": "#"
      }
    ]
  },
  "es":{
    "p8s3title": "Lo que debes saber para realizar "
    , "p8s3titleS": "prácticas en empresas en Francia"
    , "p8s3list": [
      {
        "p8s3title": "Un referente cultural e histórico"
      , "p8s3descrip": [
        {
          "p8s3line": "Además de ser uno de los centros económicos más importantes del mundo, Francia es también uno de los destinos turísticos más populares, con una industria turística prominente y exitosa. "
        },
        {
          "p8s3line": "Si apruebas las entrevistas, tendrás la oportunidad de hacer prácticas en empresas en la ciudad de París o incluso vivir la experiencia de aprender en los mejores hoteles de la Costa Azul."
        }
      ]
      , "p8s3boton": "Información detallada sobre"
      , "p8s3botonS": "prácticas en empresas en Francia"
      , "p8s3url": "#"
      },
      {
        "p8s3title": "Las empresas y las ofertas de prácticas en empresas "
      , "p8s3descrip": [
        {
          "p8s3line": "Para hacer prácticas en empresas en Francia, es necesario que tengas un nivel bastante bueno de francés porque, aunque son lugares que reciben turistas extranjeros, también el turismo nacional se mantiene. Por ello, manejar el idioma será un plus que te ayudará a desenvolverte en las prácticas."
        },
        {
          "p8s3line": "Si deseas hacer prácticas en empresas de áreas como marketing, comercio o administrativa, debes cumplir con ciertos requisitos y prepararte para las entrevistas, las cuales serán exigentes porque las empresas son bastante selectivas."
        }
      ]
      , "p8s3boton": "Consulta las ofertas de prácticas en",
        "p8s3botonS": "Empresas de Francia"
      , "p8s3url": "#"
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
      p8s3listI: [
        {
          p8s3icon: require("@/assets/images/iconos/page8/destino.png")
        },
        {
          p8s3icon: require("@/assets/images/iconos/page8/practicas.png")
        }
      ]
      , idi: "B1Uq34iH8zb"
    }
  },
  computed: {
    p8s3list() {
      return this.$t("p8s3list");
    }
  }
};
</script>

<style>
.p8s3h1d {
  display: table-cell;
  vertical-align: middle;
  padding: 0.2rem;
  text-align: left;
}

.p8s3h1 {
  font-size: 1em;
  font-weight: bold;
}
.p8s3p {
  font-size: 1em;
  padding: 0.5em 0;
}
</style>
