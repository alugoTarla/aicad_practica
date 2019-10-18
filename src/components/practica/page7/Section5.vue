<template>
  <div id="section5">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <div>
          <br>  
          <hr class="hrFondo2" />
          <h3 style="font-size: ">
            <span v-for="(item, idx) in p7s5title1" :key="idx">
              <span v-if="!item.p7s5title1s">
                {{item.p7s5title1p}}
              </span>
              <strong v-else>
                {{item.p7s5title1p}}
              </strong>
            </span>
          </h3>
          <p class="text-justify">
            <span v-for="(item, idx) in p7s5title2" :key="idx">
              <span v-if="!item.p7s5title2s">
                {{item.p7s5title2p}}
              </span>
              <strong v-else>
                {{item.p7s5title2p}}
              </strong>
            </span>
          </p>
          <br>
          <a class="btn buttonTurqueza" @click="irTo(p7s5url)">
            <strong>{{$t("p7s5button1s")}}</strong>           
          </a>
          <br>
          <div style="padding: 1em 0;">
            <hr class="hrFondo2" />
          </div>
          <br>
          </div>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p7s5title1": [
      {
        "p7s5title1p": "Read more about "
        , "p7s5title1s": false
      },
      {
        "p7s5title1p": "the Internship Agreements and intern’s Social Security"
        , "p7s5title1s": true
      }
    ],
    "p7s5title2":  [
      {
        "p7s5title2p": "When you find the ideal candidates to occupy the vacant internship positions, you will have to make sure that you correctly process the academic records, the  "
        , "p7s5title2s": false
      },
      {
        "p7s5title2p": "Internship Agreement "
        , "p7s5title2s": true
      },
      {
        "p7s5title2p": "and other important procedures such as the registration in Social Security."
        , "p7s5title2s": false
      }
    ],
    "p7s5button1s": "More information"
  },
  "es":{
    "p7s5title1": [
      {
        "p7s5title1p": "Lee más sobre "
        , "p7s5title1s": false
      },
      {
        "p7s5title1p": "los Convenios de prácticas en empresas y la seguridad social de becarios"
        , "p7s5title1s": true
      }
    ],
    "p7s5title2":  [
      {
        "p7s5title2p": "Cuando encuentres a los candidatos ideales para ocupar los puestos de becarios en las prácticas en empresas, tendrás que asegurarte de tramitar correctamente los expedientes académicos, el "
        , "p7s5title2s": false
      },
      {
        "p7s5title2p": "Convenio de prácticas "
        , "p7s5title2s": true
      },
      {
        "p7s5title2p": "y otros trámites tan importantes como el alta en la Seguridad Social."
        , "p7s5title2s": false
      }
    ],
    "p7s5button1s": "Más Información"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p7s5url: "page_pe5"
    }
  },
  methods: {
    irTo(itemName){
      itemName += '_'+this.$i18n.locale;
      this.$router.push({ name: (itemName) });
    }
  },
  computed: {
    p7s5title1() {
      return this.$t("p7s5title1");
    },
    p7s5title2() {
      return this.$t("p7s5title2");
    }
  }
};
</script>
