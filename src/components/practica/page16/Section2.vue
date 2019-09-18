<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            <span v-for="(item, idx) in p16s2title" :key="idx">
              <strong v-if="item.tituloS">{{item.titulo}}</strong>
              <span v-else>{{item.titulo}}</span>
            </span>
          </h2>
          <b-row align-v="start">
            <b-col md="4" sm="12" class="text-center" v-for="(item ,idx) of p16s2items" :key="idx">
              <div class="d-flex align-items-center">
                <div class="p-1 text-center" style="width: 20%">
                  <b-img :src="p16s2itemsI[idx].p16s2icon" class="p8iconos"></b-img>
                </div>
                <div class="p-1 text-justify " style="width: 80%">
                  <h4><strong>{{item.p16s2title}}</strong></h4>
                </div>                      
              </div>
              <div class>
                <p class="p16s2p text-justify">{{item.p16s2descript}}</p>
              </div>
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
    "p16s2title": [ 
      {
        "tituloS": true
        , "titulo": "Reasons why you should include Spain in your internship offer"
      }
    ],
    "p16s2items": [
      {
        "p16s2title": "The Language",
        "p16s2descript":
          "We have internship offers in sectors such as gastronomy, A&B and services, where the required language is Spanish, although the knowledge of other languages is highly valued."
      },
      {
        "p16s2title": "For its corporate culture",
        "p16s2descript":
          "The Spanish corporate culture is very hospitable, especially with foreign students. All your clients will be able to live a professional experience with people from all over the world."
      },
      {
        "p16s2title": "Personal experience",
        "p16s2descript":
          "At the same time, your clients will have a personal and particular enriching experience, thanks to which you can get to know the Spanish culture in depth, enjoying local gastronomy, history, nature and music."
      }
    ]
  },
  "es":{
    "p16s2title": [ 
      {
        "tituloS": true
        , "titulo": "Razones por las que debes incluir a España en tu oferta de prácticas"
      }
    ],
    "p16s2items": [
      {
        "p16s2title": "El idioma",
        "p16s2descript":
          "Contamos con ofertas de prácticas en áreas como gastronomía, A&B y servicios, en donde el idioma que se requiere es el español, aunque el manejo de otros idiomas es cada vez más valorado."
      },
      {
        "p16s2title": "Por su cultura corporativa",
        "p16s2descript":
          "La cultura corporativa española es muy receptiva, especialmente con los estudiantes extranjeros. Todos tus clientes van a poder vivir una experiencia profesional con personas de todas partes del mundo."
      },
      {
        "p16s2title": "Experiencia personal",
        "p16s2descript":
          "Al mismo tiempo, tus clientes tendrán una experiencia personal y particular bastante enriquecedora, gracias a que podrás conocer la cultura española a profundidad, disfrutando de su gastronomía, historia, naturaleza y música."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p16s2itemsI: [
        {
          p16s2icon: require("@/assets/images/vectores/page16/idioma.png")
        },
        {
          p16s2icon: require("@/assets/images/vectores/page16/culturacorporativa.png")
        },
        {
          p16s2icon: require("@/assets/images/vectores/page16/experienciapersonal.png")
        }
      ]
    };
  },
  computed: {
    p16s2title() {
      return this.$t("p16s2title");
    },
    p16s2items() {
      return this.$t("p16s2items");
    }
  }
};
</script>

<style>
.p16s2h1d {
  display: table-cell;
  vertical-align: middle;
  padding: 1rem 0.2em;
  text-align: left;
}

.p16s2h1 {
  font-size: 1.5em;
  font-weight: 600;
}
.p16s2p {
  font-size: 0.9em;
}

</style>
