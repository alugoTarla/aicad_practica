<template>
  <div id="section6">
    <ty :titles="p6s6titles" :videos="p6s6videos" :activo="false" />
  </div>
</template>

<i18n>
{
  "en":{
    "p6s6titles":[
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
    "p6s6titles":[
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
      p6s6videos:["SYp0ipioV00", "qwg-G75eu7s", "gkIs4Af6y-I"]
    }
  },
  computed: {
    p6s6titles() {
      return this.$t("p6s6titles");
    }
  }
};
</script>
