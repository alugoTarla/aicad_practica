<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>{{$t("p2title1")}}</h2>
          <br />
          <b-row class="justify-content-md-center">
            <b-col cols md="4" class="text-center" v-for="(item, idx) in p2items" :key="idx">
              <b-card class="p2card" style="
  -webkit-box-shadow: -1px 4px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 4px 5px 0px rgba(0,0,0,0.75);
  box-shadow: -1px 4px 5px 0px rgba(0,0,0,0.75);">
                <div class="p2fondoIconos">
                  <b-img :src="p2itemsI[idx].p2img" />
                </div>
                <b-card-title class="p2cardtitle">{{item.p2title}}</b-card-title>
                <b-card-body class="p2cardbody">{{item.p2descript}}</b-card-body>
              </b-card>
            </b-col>
          </b-row>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p2title1": "REGISTER WITH YOUR ACCOUNT",
    "p2items": [
      {
        "p2title": "Register your profile",
        "p2descript":
          "Take a few minutes to register placing your personal and contact data. You will immediately receive an email to confirm the receipt of all your data."
      },
      {
        "p2title": "Complete your account",
        "p2descript":
          "Indicate your preferences for internships, availability, language level, the country or city where you would like to find your internships and everything else that we should consider when we make you a proposal."
      },
      {
        "p2title": "Receive a first call",
        "p2descript":
          "Our Talent team will call you on the phone to get to know each other. In this first call we will solve your doubts about the process and organize the first large interview with our consultants."
      }
    ]
  },
  "es":{
    "p2title1": "REGISTRATE CON TU CUENTA",
    "p2items": [
      {
        "p2title": "Registra tu perfil",
        "p2descript":
          "Tómate unos minutos para realizar el registro colocando tus datos personales y medios de contacto en el formulario. Recibirás enseguida un email para confirmar la recepción de todos tus datos."
      },
      {
        "p2title": "Completa tu cuenta",
        "p2descript":
          "Indica tus preferencias de prácticas en empresas, disponibilidad, nivel de idiomas, el país o ciudad donde te gustaría encontrar tu prácticas en empresas y todo lo que debamos tener en cuenta más adelante cuando te hagamos propuestas."
      },
      {
        "p2title": "Recibe un first-call",
        "p2descript":
          "Nuestro equipo de Talent te llamará por teléfono con el fin de conocerte y que nos conozcas, en esta primera llamada resolveremos tus dudas sobre el proceso y organizaremos la primera gran entrevista con nuestros consultores."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p2itemsI: [
        {
          p2img: require("@/assets/images/vectores/page2/registrate-perfil.png"),
        },
        {
          p2img: require("@/assets/images/vectores/page2/registrate-completa.png"),
        },
        {
          p2img: require("@/assets/images/vectores/page2/registrate-llamada.png"),
        }
      ]
    }
  },
  computed: {
    p2items() {
      return this.$t("p2items"); 
    }
  }
};
</script>
