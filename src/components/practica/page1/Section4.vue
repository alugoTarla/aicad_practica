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
        , "title": "Reviews,"
      },
      {
        "titleS": true
        , "title": "opinions and experiences"
      },
      {
        "titleS": false
        , "title": "of trainees at AICAD Business School"
      }
    ]
  },
  "es":{
    "p1s4titles":[
      {
        "titleS": false
        , "title": "Reseñas,"
      },
      {
        "titleS": true
        , "title": "opiniones y experiencias"
      },
      {
        "titleS": false
        , "title": "de alumnos en prácticas en AICAD Business School"
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
