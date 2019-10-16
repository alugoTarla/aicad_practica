<template>
  <div id="section3">
    <div class="fondoWhite" >
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <b-row align-h="center" align-v="center">
            <b-col md="5" sm="12"
             class="p18s3imgfondo" :style="'background-image: url(' + p18s3Img + ');'">
            </b-col>
            <b-col md="7" sm="12">
              <h2 class="text-left">
              <blockquote>
                <span v-for="(item, idx) in p18s3titulo" :key="idx" class="mb-1">
                  <strong v-if="item.textS">
                    {{item.text}}
                  </strong>
                  <span v-else>
                    {{item.text}}
                  </span>
                </span>
              </blockquote>
              </h2>
              <p class="text-justify">
                <span v-for="(item, idx) in p18s3texts" :key="idx">
                  <strong v-if="item.textS">
                    {{item.text}}
                  </strong>
                  <span v-else>
                    {{item.text}}
                  </span>
                </span>
              </p>
              <br>
              <h3 class="text-left">
                {{$t("p18s3texts1")}}
              </h3>
            </b-col>
          </b-row>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n locate="en">
{
  "en":{
    "p18s3titulo": [
        {
          "textS": true
          , "text": "\"Trust, academic reputation and high labor integration is the commitment that unites us to the university world\""
        }
      ],
      "p18s3texts": [
        {
          "textS": true
          , "text": "AICAD Business School in the last 10 years has placed thousands of students from a multitude of universities in Spain and around Europe in the world of work. As a collaborating center for trainees at the University of Las Palmas de Gran Canaria."
        }
      ],
      "p18s3texts1": " "
  },
  "es":{
    "p18s3titulo": [
        {
          "textS": true
          , "text": "\"Confianza, reputación académica y alta integración laboral es el compromiso que nos une al mundo universitario\""
        }
      ],
      "p18s3texts": [
        {
          "textS": true
          , "text": "AICAD Business School en los últimos 10 años ha colocado miles de alumnos de multitud de unversidades de España y alrededor de Europa en el mundo laboral. Como centro colaborador para alumnos en prácticas de la universidad de las Palmas de Gran Canaria."
        }
      ],
      "p18s3texts1": " "
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p18s3Img: require("@/assets/images/banners/page18/testimonio.png")
    };
  },
  computed: {
    p18s3titulo() {
      return this.$t("p18s3titulo");
    },
    p18s3texts() {
      return this.$t("p18s3texts");
    }
  }
};
</script>

<style>
.p18s3imgfondo{
    background-size: cover;
    height: 16em;
}
</style>