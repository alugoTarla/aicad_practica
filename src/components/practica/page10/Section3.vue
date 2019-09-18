<template>
  <div id="section3">
    <ty :titles="p10s3titles" :videos="p10s3videos" :activo="false" />
  </div>
</template>

<i18n>
{
  "en":{
    "p10s3titles":[
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
        , "title": "of students about AICAD Business School"
      }
    ]
  },
  "es":{
    "p10s3titles":[
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
        , "title": "de los estudiantes sobre AICAD Business School"
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
      p10s3videos:["gkIs4Af6y-I", "qwg-G75eu7s", "SYp0ipioV00"]
    }
  },
  computed: {
    p10s3titles() {
      return this.$t("p10s3titles");
    }
  }
};
</script>
