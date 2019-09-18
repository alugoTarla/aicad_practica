<template>
  <div id="section8">
    <ty :titles="p7s8titles" :videos="p7s8videos" :activo="false" />
  </div>
</template>

<i18n>
{
  "en":{
    "p7s8titles":[
      {
        "titleS": false
        , "title": "Listen to the"
      },
      {
        "titleS": true
        , "title": "opinions"
      },
      {
        "titleS": false
        , "title": "of other students about AICAD Business School"
      }
    ]
  },
  "es":{
    "p7s8titles":[
      {
        "titleS": false
        , "title": "Escucha las"
      },
      {
        "titleS": true
        , "title": "opiniones"
      },
      {
        "titleS": false
        , "title": "de otros estudiantes sobre AICAD Business School"
      }
    ]
  }
}
</i18n>

<script>
import ty from "@/components/utils/temp_youtube";
export default {
  components: {
    ty
  },
  data() {
    return {
      p7s8videos:["SYp0ipioV00", "qwg-G75eu7s", "gkIs4Af6y-I"]
    }
  },
  computed: {
    p7s8titles() {
      return this.$t("p7s8titles");
    }
  }
};
</script>