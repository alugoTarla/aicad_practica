<template>
  <div id="section4">
    <div class="fondoWhite" >
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            <span v-for="(item, idx) in p18s4titulo" :key="idx">
              <strong v-if="item.textS">
                {{item.text}}
              </strong>
              <span v-else>
                {{item.text}}
              </span>
            </span>
          </h2>
          <p class="text-justify">
            <span v-for="(item, idx) in p18s4texts" :key="idx">
              <strong v-if="item.textS">
                {{item.text}}
              </strong>
              <span v-else>
                {{item.text}}
              </span>
            </span>
          </p>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p18s4titulo": [
        {
          "textS": true
          , "text": "Become a Partner University and facilitate the search for internships for your students"
        }
      ],
      "p18s4texts": [
        {
          "textS": false
          , "text": "We work together with "
        },
        {
          "textS": true
          , "text": "university Career Centers , business schools, mobility agencies, training centers and Work and Travel "
        },
        {
          "textS": false
          , "text": "to find for your students professional internships in companies."
        }
      ]
  },
  "es":{
    "p18s4titulo": [
        {
          "textS": true
          , "text": "Conviértete en Universidad Partner y facilita la búsqueda de prácticas en empresas para tus estudiantes"
        }
      ],
      "p18s4texts": [
        {
          "textS": false
          , "text": "Trabajamos en conjunto con "
        },
        {
          "textS": true
          , "text": "Career Centres de universidades, business schools, agencias de movilidad, centros de formación y Work and Travel "
        },
        {
          "textS": false
          , "text": "para encontrar prácticas profesionales en empresas dirigidas a sus estudiantes durante todo el año."
        }
      ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
    };
  },
  computed:{
    p18s4titulo() {
      return this.$t("p18s4titulo");
    },
    p18s4texts() {
      return this.$t("p18s4texts");
    }
  }
};
</script>