<template>
  <div id="section3">
    <ty :titles="p11s3titles" :videos="p11s3videos" :activo="false" />
  </div>
</template>

<i18n>
{
  "en":{
    "p11s3titles":[
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
    "p11s3titles":[
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
      p11s3videos:["gkIs4Af6y-I", "qwg-G75eu7s", "SYp0ipioV00"]
    }
  },
  computed:{
    p11s3titles() {
      return this.$t("p11s3titles");
    }
  }
};
</script>
