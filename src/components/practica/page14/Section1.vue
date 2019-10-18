<template>
  <div id="section1">
    <div class="p14s1fondoFwhite pt-5 ">
      <b-container fluid>
        <b-container class="text-center pt-4">
          <h1>
            <span v-for="(item, index) in p14s1title" :key="index">
              <strong v-if="item.p14s1titleF">{{item.p14s1titleT}}</strong>
              <span v-else>{{item.p14s1titleT}}</span>
            </span>
          </h1>
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
  h1 {
    color: whitesmoke;
    padding: 1.5em;
  };
  color: whitesmoke;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient( rgba(0, 0, 0, 0.5)), url("~@/assets/new_imgs/Banner-seguro.jpg");
  // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url("~@/assets/images/banners/banner5.jpg");
  min-height: 500px;
}
</style>