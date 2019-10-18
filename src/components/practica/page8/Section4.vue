<template>
  <div id="section4">
    <div class="wrapper">
      <div class="fondoWhite">
        <b-container fluid>
          <b-container>
            <br />
            <b-row align-v="start">
              <b-col md="9">
                <br />
                <h2>
                  <span>{{$t("p8s4title")}}</span>
                  <strong>{{$t("p8s4titleS")}}</strong>
                </h2>
                <br />
                <b-row>
                  <b-col md="6" sm="12" v-for="(item, idx) in p8s4list" :key="idx">
                    <div class="d-flex align-items-center">
                      <div class="p-1 text-center" style="width: 20%">
                        <b-img :src="p8s4listI[idx].p8s4icon" class="p8iconos"></b-img>
                      </div>
                      <div class="p-1 text-justify " style="width: 80%">
                        <h4><strong>{{item.p8s4title}}</strong></h4>
                      </div>                      
                    </div>
                    <div class>
                      <div
                        class="p8s4p text-justify"
                        v-for="(item1, idx1) in item.p8s4descrip"
                        :key="idx1"
                      >{{item1.p8s4line}}</div>
                    </div>
                    <br />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6" sm="12" v-for="(item, idx) in p8s4list" :key="idx">
                    <div class="text-center">
                      <a class="btn buttonTurqueza" :href="item.p8s1url">
                        {{item.p8s4boton}}
                        <strong>{{item.p8s4botonS}}</strong>
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
    "p8s4title": "What you should know about doing ",
    "p8s4titleS": "internships in Mexico",
    "p8s4list": [
      {
        "p8s4title": "Living the beauty of the Caribbean",
        "p8s4descrip": [
          {
            "p8s4line":
              "Mexico is a country with a great cultural and historical burden, as well as being a reference tourist destination worldwide. Many students seek to do internships in Mexican companies to improve their Spanish or to have a unique experience culturally and academically and professionally."
          },
          {
            "p8s4line":
              "Destinations such as Playa del Carmen, Cancun and the Riviera Maya are points of interest and where you can find large hotel industries that have collaborated with AICAD Business School for a long time, due to its impeccable success and for providing students from all parts of the world with more enriching experiences."
          }
        ],
        "p8s4boton": "Detailed information on",
        "p8s4botonS": "Internships in Mexico",
        "p8s4url": "#"
      },
      {
        "p8s4title": "Companies and internships",
        "p8s4descrip": [
          {
            "p8s4line":
              "You can find internship offers in 5-star hotels in various parts of Mexico, with vacancies of reception, event assistant, kitchen, sales or reservations executive. If you want to undergo an internship, the specialists, at AICAD Business School can advise you."
          },
          {
            "p8s4line":
              "You can have first hand experience of one of the oldest and most interesting cultures in Latin America in hotels that provide students with the best learning opportunities."
          }
        ],
        "p8s4boton": "Check the internship offers at",
        "p8s4botonS": "Companies in Mexico",
        "p8s4url": "#"
      }
    ]
  },
  "es":{
    "p8s4title": "Lo que debes saber para realizar ",
    "p8s4titleS": "prácticas en empresas en México",
    "p8s4list": [
      {
        "p8s4title": "Viviendo la belleza del Caribe",
        "p8s4descrip": [
          {
            "p8s4line":
              "México es un país con una gran carga cultural e histórica, además de ser un destino turístico referente a nivel mundial. Muchos estudiantes buscan hacer prácticas en empresas de México para mejorar su español o por tener una experiencia única, tanto desde lo cultural como desde lo académico y profesional. "
          },
          {
            "p8s4line":
              "Destinos como Playa del Carmen, Cancún y la Riviera Maya son puntos de interés y en donde podrás encontrar grandes industrias hoteleras que colaboran con AICAD Business School desde hace tiempo, gracias a su trayectoria intachable y por brindarle a los estudiantes de todas partes del mundo las experiencias más enriquecedoras."
          }
        ],
        "p8s4boton": "Información detallada sobre",
        "p8s4botonS": "Prácticas en México",
        "p8s4url": "#"
      },
      {
        "p8s4title": "Las empresas y las ofertas de prácticas en empresas",
        "p8s4descrip": [
          {
            "p8s4line":
              "Puedes encontrar ofertas de prácticas en hoteles de 5 estrellas en varias partes de México, con vacantes desde la recepción hasta como asistente de eventos, pasando por cocina, comercio o ejecutivo de reservas. Si deseas hacer una práctica, en AICAD Business School te podremos asesorar."
          },
          {
            "p8s4line":
              "Podrás experimentar de primera mano una de las culturas más antiguas e interesantes de Latinoamérica en hoteles que le brindan a los estudiantes los mejores aprendizajes y vivencias."
          }
        ],
        "p8s4boton": "Consulta las ofertas de prácticas en",
        "p8s4botonS": "Empresas en México",
        "p8s4url": "#"
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
      p8s4listI: [
        {
          p8s4icon: require("@/assets/images/iconos/page8/destino.png")
        },
        {
          p8s4icon: require("@/assets/images/iconos/page8/practicas.png")
        }
      ]
      , idi: "B1Uq74jnWZw"
    };
  },
  computed: {
    p8s4list() {
      return this.$t("p8s4list");
    }
  }
};
</script>

<style>
.p8s4h1d {
  display: table-cell;
  vertical-align: middle;
  padding: 0.2rem;
  text-align: left;
}

.p8s4h1 {
  font-size: 1em;
  font-weight: bold;
}
.p8s4p {
  font-size: 1em;
  padding: 0.5em 0;
}
</style>
