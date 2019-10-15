<template>
  <div id="section1">
    <div class="p16s1fondoFwhite">
      <div class="overlay">
        <b-container fluid>
          <b-container class="text-center">
            <br />
            <br />
            <h2>
              <div v-for="(item, idx) in p16s1titulos" :key="idx">
                {{item}}
              </div>
            </h2>
            <br />
            <b-row align-h="center" align-v="center">
              <b-col md="10" sm="12">
                <h3>{{$t("p16s1titulos2")}}</h3>
              </b-col>
            </b-row>            
            <br />
            <br />
          </b-container>
        </b-container>
      </div>
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
  h2 {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    text-align: center !important;
    padding: 20px;
    border-radius: 1em;
    margin: 0 auto;
    max-width: 800px;
  };
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: top center;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url("~@/assets/new_imgs/Banner-work-travel.jpg");
  min-height: 500px;
  height: auto;
  p {
    font-family: "Lato Medium", sans-serif !important;
    color: whitesmoke;
    text-align: center !important;
    border-radius: 1em;
    padding: 0.5em;
    margin: 0 auto;
    max-width: 800px;
  };
}
</style>