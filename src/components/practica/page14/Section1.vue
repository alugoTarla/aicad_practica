<template>
  <div id="section1">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <br />
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
