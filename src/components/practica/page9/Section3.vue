<template>
  <div id="section3">
    <ty :titles="p9s3titles" :videos="p9s3videos" :activo="false" />
  </div>
</template>

<i18n>
{
  "en":{
    "p9s3titles":[
      {
        "titleS": true
        , "title": "Opinions"
      },
      {
        "titleS": false
        , "title": "about AICAD Business School"
      }
    ]
  },
  "es":{
    "p9s3titles":[
      {
        "titleS": true
        , "title": "Opiniones"
      },
      {
        "titleS": false
        , "title": "sobre AICAD Business School"
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
      p9s3videos:["gkIs4Af6y-I", "qwg-G75eu7s", "SYp0ipioV00"]
    }
  },
  computed: {
    p9s3titles() {
      return this.$t("p9s3titles");
    }
  }
};
</script>
