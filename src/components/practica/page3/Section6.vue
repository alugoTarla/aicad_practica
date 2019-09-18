<template>
  <div id="section6">
    <ty :titles="p3s6titles" :videos="p3s6videos" :activo="false" />
  </div>
</template>

<i18n>
{
  "en":{
    "p3s6titles":[
      {
        "titleS": false
        , "title": "Success is not a coincidence"
      }
    ]
  },
  "es":{
    "p3s6titles":[
      {
        "titleS": false
        , "title": "El éxito no es una casualidad"
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
      p3s6videos:["SYp0ipioV00", "qwg-G75eu7s", "gkIs4Af6y-I"]
    }
  },
  computed: {
    p3s6titles() {
      return this.$t("p3s6titles");
    }
  }
};
</script>
