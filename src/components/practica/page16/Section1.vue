<template>
  <div id="section1">
    <div class="p16s1fondoFwhite">
      <b-container fluid>
        <b-container class="text-center pt-3">
          <h1>
            <div v-for="(item, idx) in p16s1titulos" :key="idx">{{item}}</div>
          </h1>
          <p>{{$t("p16s1titulos2")}}</p>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p16s1titulos": [
      "Are you a Work and Travel agency?",
      "Collaborate with us and find professional internships in Spain!"
    ],
    "p16s1titulos2":
      "Become a partner agency and you will have the opportunity to provide your clients with the best training experiences in multinational companies, startUps and even hotels throughout Spain."
  },
  "es":{
    "p16s1titulos": [
      "¿Tienes una agencia de Work and Travel?",
      "¡Anímate a colaborar con nosotros y encuentra prácticas profesionales en España!"
    ],
    "p16s1titulos2":
      "Conviértete en agencia partner y tendrás la oportunidad de brindarle a tus clientes las mejores experiencias de formación en empresas multinacionales, startUps e incluso hoteles de toda España."
      
  }
}
</i18n>

<script>
export default {
  computed: {
    p16s1titulos() {
      return this.$t("p16s1titulos");
    }
  }
};
</script>

<style lang="scss">
.p16s1fondoFwhite {
  h1 {
    color: whitesmoke;
    padding: 0.5em;
  }
  p {
    color: whitesmoke;
    padding: 0.5em;
  }
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5)),
    url("~@/assets/new_imgs/Banner-work-travel.jpg");
  min-height: 500px;
  height: auto;
}
</style>