<template>
  <div id="section2">
    <div class="fondoWhite" >
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            {{$t("p17s2titulo")}}
          </h2>
          <p class="text-justify">
            <span v-for="(item, idx) in p17s2texts" :key="idx">
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
    "p17s2titulo": "Learn how we help Universities and Partner Agencies find internships for their students",
    "p17s2texts": [
      {
        "textS": false
        , "text": "We work together with "
      },
      {
        "textS": true
        , "text": "Career Centers of universities, business schools, mobility agencies, training centers and Work and Travel "
      },
      {
        "textS": false
        , "text": "to find professional internships for their students throughout the year."
      }
    ]
  },
  "es":{
    "p17s2titulo": "Conoce cómo nosotros ayudamos a Universidades y Agencias Partner a buscar prácticas en empresas para sus estudiantes",
    "p17s2texts": [
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
  computed: {
    p17s2texts() {
      return this.$t("p17s2texts");
    }
  }
};
</script>

<style>
.p17s2fondoFwhite {
  color: white;
  background-size: cover;
}
</style>