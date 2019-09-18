<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>
            {{$t("p7s2title1")}}
          </h2>
          <p class="text-justify">
            <span v-for="(item, idx) in p7s2desc1" :key="idx">
              <strong v-if="item.p7s2desc1s">
                {{item.p7s2desc1p}}
              </strong>
              <span v-else>
                {{item.p7s2desc1p}}
              </span>
            </span>
          </p>
          <br />
          <p class="text-justify">
            {{$t("p7s2desc2")}}
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
    "p7s2title1": "Hire an intern for your company in just 3 simple steps",
    "p7s2desc1":  [
      {
        "p7s2desc1p":   "Follow these steps "
        , "p7s2desc1s": false
      },
      {
        "p7s2desc1p":   "to find your interns and to make sure "
        , "p7s2desc1s": true
      },
      {
        "p7s2desc1p":   "that all documents and requirements at the administrative level are going to be processed properly. "
        , "p7s2desc1s": false
      },
      {
        "p7s2desc1p":   "This is your opportunity if you are looking for interns․"
        , "p7s2desc1s": true
      }
    ],
    "p7s2desc2":  "Hiring a fellow has never been easier!"
  },
  "es":{
    "p7s2title1": "Contrata un becario para tu empresa en tan sólo 3 simples pasos",
    "p7s2desc1":  [
      {
        "p7s2desc1p":   "Sigue estos pasos para "
        , "p7s2desc1s": false
      },
      {
        "p7s2desc1p":   "encontrar a tu estudiante de prácticas en empresas "
        , "p7s2desc1s": true
      },
      {
        "p7s2desc1p":   "y si deseas asegurarte de que todos los documentos y exigencias a nivel administrativo van a ser tramitadas debidamente. Esta es tu oportunidad si estás buscando "
        , "p7s2desc1s": false
      },
      {
        "p7s2desc1p":   "estudiantes de prácticas en empresas. "
        , "p7s2desc1s": true
      }
    ],
    "p7s2desc2":  "¡Contratar un becario nunca ha sido más fácil!"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    p7s2desc1() {
      return this.$t("p7s2desc1");
    }
  }
};
</script>
