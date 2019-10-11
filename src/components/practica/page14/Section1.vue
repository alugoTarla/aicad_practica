<template>
  <div id="section1">
    <div class="p14s1fondoFwhite">
      <b-container fluid>
        <b-container class="text-center pt-5 pb-5">
          <br />
          <h2>
            <span v-for="(item, index) in p14s1title" :key="index">
              <strong v-if="item.p14s1titleF">{{item.p14s1titleT}}</strong>
              <span v-else>{{item.p14s1titleT}}</span>
            </span>
          </h2>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p14s1title": [
      {
        "p14s1titleF": true,
        "p14s1titleT": "Accident, Liability and Displacement insurances"
      }
    ]
  },
  "es":{
    "p14s1title": [
      {
        "p14s1titleF": true,
        "p14s1titleT": "Contrata un seguro de Accidentes, Responsabilidad Civil y Desplazamiento"
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
    p14s1title() {
      return this.$t("p14s1title");
    }
  }
};
</script>

<style lang="scss">
.p14s1fondoFwhite {
  h2 {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    background: #00000033;
    border-radius: 1em;
    padding: 1em;
  };
  color: white;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0);
  background-image: url("~@/assets/images/banners/banner5.jpg");
  vertical-align: middle;
}
</style>