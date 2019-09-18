<template>
  <div id="section4">
    <ty :titles="p1s4titles" :videos="p1s4videos" :activo="false" />
  </div>
</template>

<i18n>
{
  "en":{
    "p1s4titles":[
      {
        "titleS": false
        , "title": "Listen to the "
      },
      {
        "titleS": true
        , "title": "opinions "
      },
      {
        "titleS": false
        , "title": "of other students about AICAD Business School"
      }
    ]
  },
  "es":{
    "p1s4titles":[
      {
        "titleS": false
        , "title": "Escucha las "
      },
      {
        "titleS": true
        , "title": "opiniones "
      },
      {
        "titleS": false
        , "title": "de otros alumnos sobre AICAD Business School"
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
      p1s4videos:["SYp0ipioV00", "qwg-G75eu7s", "gkIs4Af6y-I"]
    }
  },
  computed: {
    p1s4titles() {
      return this.$t("p1s4titles");
    }
  }
};
</script>
