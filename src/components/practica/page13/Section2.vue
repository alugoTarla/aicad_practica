<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <br />
          <p class="text-justify">
            <span v-for="(item, index) in text" :key="'p0'+index">
              <strong v-if="item.txtS">
                {{item.txt}}
              </strong>
              <span v-else>
                {{item.txt}}
              </span>
            </span>
          </p>
          <br>
          <p class="text-justify">
            <span v-for="(item, index) in text1" :key="'p0'+index">
              <strong v-if="item.txtS">
                {{item.txt}}
              </strong>
              <span v-else>
                {{item.txt}}
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
    "text": [
      {
        "txtS": false
        , "txt": "Considering to host a fellow in your company? Hereby we  describe what the internship contract is, how the relationship is regulated and how long it lasts."
      }
    ],
    "text1": [
      {
        "txtS": false
        , "txt": "Normally, in their last years of university education, "
      },
      {
        "txtS": true
        , "txt": "during their masters or specialized degree courses, "
      },
      {
        "txtS": false
        , "txt": "the students have the possibility of doing internships in companies to complete their training, and this when the topic of the  internship contract comes up."
      }
    ]
  },
  "es":{
    "text": [
      {
        "txtS": false
        , "txt": "Si te has planteado incorporar a un becario en tu empresa, en este post te comentamos qué es el contrato en prácticas, cómo se regula la relación y qué duración tiene."
      }
    ],
    "text1": [
      {
        "txtS": false
        , "txt": "Normalmente los estudiantes de los "
      },
      {
        "txtS": true
        , "txt": "últimos cursos de las universidades, máster o cursos con titulación propia "
      },
      {
        "txtS": false
        , "txt": "tienen la posibilidad de realizar prácticas en empresas para completar su formación y es en ese momento cuando se habla del contrato de becario."
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
    text() {
      return this.$t("text");
    },
    text1() {
      return this.$t("text1");
    }
  }
};
</script>
