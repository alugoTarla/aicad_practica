<template>
  <div id="section3">
    <div class="fondoGrisClaro">
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
    "p2title1": "Get through the interviews",
    "p2items": [
      {
        "p2title": "Interview with consultants and specialists",
        "p2descript":
          "The approval of our consultants is essential to determine which internship offers you could apply for. Our specialists will take into consideration aspects such as your availability, training and experience and language level, since all these elements are also going to be taken into account by the companies."
      },
      {
        "p2title": "Select your company",
        "p2descript":
          "Once you get through the job interview with the consultant, we will give you all the relevant information about the company and what they offer so you would be able to make up your mind and offer yourself to them by giving in your CV. This step is very important because you will then have to cancel the fee in case you are selected by the company."
      },
      {
        "p2title": "Get through the final interview",
        "p2descript":
          "Once you have everything prepared and your CV has been presented, we will help you organize the interview with the head of the company where you will carry out your paid internship in the near future. The most common means are by phone or Skype calls. The outcome of the interview is in your hands."
      }
    ]
  },
  "es":{
    "p2title1": "APRUEBA las entrevistas",
    "p2items": [
      {
        "p2title": "Entrevístate con asesores y especialistas",
        "p2descript":
          "Es importante la aprobación por parte de nuestros consultores a la hora de determinar a cuáles ofertas de prácticas podrás aplicar. Tomarán en consideración aspectos como tu disponibilidad, formación y experiencia y nivel de idiomas, ya que todos estos elementos van a ser tomados en cuenta por las empresas."
      },
      {
        "p2title": "Selecciona tu empresa",
        "p2descript":
          "Una vez aprobada la entrevista con el consultor, te brindaremos toda la información sobre la empresa y sus ofertas para que puedas tomar la decisión de presentarte a la misma con tu CV. Este paso es importante ya que será necesario que canceles la cuota si la empresa seleccionada te acepta."
      },
      {
        "p2title": "Aprueba la entrevista final",
        "p2descript":
          "Una vez que tengas todo preparado y tu CV haya sido presentado, te ayudaremos a organizar la entrevista con el jefe de la empresa en donde realizarás la práctica remunerada en los días siguientes. Los medios más comunes son por teléfono o llamadas de Skype. El resultado de la misma estará en tus manos."
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
          p2img: require("@/assets/images/vectores/page2/aprueba-entrevistate.png")
        },
        {
          p2img: require("@/assets/images/vectores/page2/aprueba-elige.png")
        },
        {
          p2img: require("@/assets/images/vectores/page2/aprueba-entrevista.png")
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
