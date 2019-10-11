<template>
  <div id="section4">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <h2>{{$t("p2title1")}}</h2>
          <br />
          <b-row align-h="center">
              <b-col lg="4" md="6" sm="12" class="text-center pb-3" v-for="(item, idx) in p2items" :key="idx">
              <b-card class="p2card cardd">
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
    "p2title1": "Verify your internships",
    "p2items": [
      {
        "p2title": "Receive the acceptance letter",
        "p2descript":
          "After the final interview with the company representative where you will carry out your internship, within a maximum of three days, we will make a decision. If the decision is in your favor, we will send you an email with the news, the acceptance letter and the link to process the payment."
      },
      {
        "p2title": "Cancel and confirm the payment",
        "p2descript":
          "When you receive the acceptance letter and the payment link, you will have three days to complete the procedures and secure your position, as well as to cancel the management fees, in order to process the agreement with the company."
      },
      {
        "p2title": "Manage your agreement",
        "p2descript":
          "Once the payment is received, you will receive an email with a list of requirements necessary to carry out your internship. Thus, the process of the agreement will begin and your will obtain the signatures you need before you start the internship."
      }
    ]
  },
  "es":{
    "p2title1": "VERIFICA tus prácticas en empresas",
    "p2items": [
      {
        "p2title": "Recibe la carta de aceptación",
        "p2descript":
          "Luego de la entrevista final con el jefe de la empresa en donde realizarás tus prácticas, cuando transcurran un máximo de tres días, tomaremos una decisión y de ser favorable para ti, te enviaremos un email con la noticia, la carta de aceptación y el link para tramitar el pago."
      },
      {
        "p2title": "Cancela y confirma el pago",
        "p2descript":
          "Cuando recibas la carta de aceptación y el link de pago, tendrás tres días para realizar los trámites y confirmar tu lugar, cancelando igualmente las yarifas de gestión, para poder ir tramitando el convenio con la empresa."
      },
      {
        "p2title": "Gestiona tu convenio",
        "p2descript":
          "Una vez recibido el pago, recibirás un correo con una lista de requisitos necesarios para realizar tu práctica en empresas y así comenzar el trámite del convenio y obtener las firmas que necesitas antes de que comiences la práctica."
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
          p2img: require("@/assets/images/vectores/page2/confirma-carta.png")
         },
        {
          p2img: require("@/assets/images/vectores/page2/confirma-pago.png")
        },
        {
          p2img: require("@/assets/images/vectores/page2/confirma-convenio.png")
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
