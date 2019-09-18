<template>
  <div id="section5">
    <div class="wrapper">
      <div class="fondoGrisClaro">
        <b-container fluid>
          <b-container>
            <br />
            <b-row align-v="start">
              <b-col md="9">
                <br />
                <h2>
                  <span>{{$t("p8s5title")}}</span>
                  <strong>{{$t("p8s5titleS")}}</strong>
                </h2>
                <br />
                <b-row>
                  <b-col md="6" sm="12" v-for="(item, idx) in p8s5list" :key="idx">
                    <div class="d-flex align-items-center">
                      <div class="p-1 text-center" style="width: 20%">
                        <b-img :src="p8s5listI[idx].p8s5icon" class="p8iconos"></b-img>
                      </div>
                      <div class="p-1 text-justify " style="width: 80%">
                        <h4><strong>{{item.p8s5title}}</strong></h4>
                      </div>                      
                    </div>
                    <div class>
                      <div
                        class="p8s5p text-justify"
                        v-for="(item1, idx1) in item.p8s5descrip"
                        :key="idx1"
                      >{{item1.p8s5line}}</div>
                    </div>
                    <br />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6" sm="12" v-for="(item, idx) in p8s5list" :key="idx">
                    <div class="text-center">
                      <a class="btn buttonTurqueza" :href="item.p8s1url">
                        {{item.p8s5boton}}
                        <strong>{{item.p8s5botonS}}</strong>
                      </a>
                    </div>
                    <br />
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
    "p8s5title": "What you should know about doing ",
    "p8s5titleS": "internships in Germany",
    "p8s5list": [
      {
        "p8s5title": "Learn from European industrial power",
        "p8s5descrip": [
          {
            "p8s5line":
              "Germany is known for its productivity and serious business environment. Berlin, Munich and Hamburg are destination cities for internships in companies for those ambitious students who look for new challenges. It’s the right place for those who want to learn to direct their focus and work according to German business style, as well as to develop their industrial approach and particular working methods."
          },
          {
            "p8s5line":
              "This country has a rich culture and activities that add to the experience of the internships. Although the weather can be cold, you can still have rewarding experiences that will contribute not only to your CV but also to your life."
          }
        ],
        "p8s5boton": "Detailed information on",
        "p8s5botonS": "Internships in Germany",
        "p8s5url": "#"
      },
      {
        "p8s5title": "Companies and internships",
        "p8s5descrip": [
          {
            "p8s5line":
              "When selecting an intern, German companies are quite demanding, because they have ambitious standards both at the interview level and in the internship process."
          },
          {
            "p8s5line":
              "In this country,you can regularly find internships in popular areas such as marketing, foreign trade or customer service which require foreign languages."
          }
        ],
        "p8s5boton": "Check the internship offers at",
        "p8s5botonS": "Companies in Germany",
        "p8s5url": "#"
      }
    ]
  },
  "es":{
    "p8s5title": "Lo que debes saber para realizar ",
    "p8s5titleS": "prácticas en empresas en Alemania",
    "p8s5list": [
      {
        "p8s5title": "Aprende de la potencia industrial europea",
        "p8s5descrip": [
          {
            "p8s5line":
              "Alemania es conocida por su carácter productivo y entorno serio y empresarial. Berlín, Munich y Hamburgo son ciudades destino de prácticas en empresas para aquellos estudiantes ambiciosos que busquen nuevos retos, sobre todo si desean aprender a dirigir su enfoque y trabajo hacia el estilo de negocios germano, así como su enfoque industrial y métodos de trabajo particulares."
          },
          {
            "p8s5line":
              "Este país cuenta con una rica cultura y actividades que suman a la experiencia de las prácticas. Aunque el clima puede ser frío, igual puedes tener vivencias gratificantes a través de las prácticas en empresas que aportarán no solo a tu CV sino también a tu vida."
          }
        ],
        "p8s5boton": "Información detallada sobre",
        "p8s5botonS": "Prácticas en Alemania",
        "p8s5url": "#"
      },
      {
        "p8s5title": "Las empresas y las ofertas de prácticas en empresas ",
        "p8s5descrip": [
          {
            "p8s5line":
              "A la hora de seleccionar un becario en prácticas, las empresas alemanas son bastante exigentes, porque tienen estándares ambiciosos tanto a nivel de entrevistas como en el proceso de las prácticas."
          },
          {
            "p8s5line":
              "En este país, es normal encontrar puestos de prácticas en áreas que requieran del manejo de idiomas extranjeros, como el marketing, comercio exterior o el customer service, que serían las más populares."
          }
        ],
        "p8s5boton": "Consulta las ofertas de prácticas en",
        "p8s5botonS": "Empresas en Alemania",
        "p8s5url": "#"
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
      p8s5listI: [
        {
          p8s5icon: require("@/assets/images/iconos/page8/destino.png")
        },
        {
          p8s5icon: require("@/assets/images/iconos/page8/practicas.png")
        }
      ]
      , idi: "B1Uq34iH8zb"
    };
  },
  computed: {
    p8s5list() {
      return this.$t("p8s5list");
    }
  }
};
</script>

<style>
.p8s5h1d {
  display: table-cell;
  vertical-align: middle;
  padding: 0.2rem;
  text-align: left;
}

.p8s5h1 {
  font-size: 1em;
  font-weight: bold;
}
.p8s5p {
  font-size: 1em;
  padding: 0.5em 0;
}
</style>
