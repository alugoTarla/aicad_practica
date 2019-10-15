<template>
  <div id="section5">
    <div class="fondoGrisClaro">
      <b-container fluid>
          <b-container class="text-center">
            <br />
            <h2>
              <span v-for="(item, index) in p14s5title" :key="index">
                <strong v-if="item.p14s5titleF">{{item.p14s5titleT}}</strong>
                <span v-else>{{item.p14s5titleT}}</span>
              </span>
            </h2>
            <p class="text-justify">
              {{$t("p14s5text")}}
            </p>
            <br />
            <b-row align-v="start">
              <b-col lg="4" md="6" sm="12" class="text-center" v-for="(item ,idx) of p14s51items" :key="idx">
                <br>
                <div class="d-flex align-items-center">
                  <div class="p-1 text-center" style="width: 15%">
                    <b-img :src="p14s51itemsI[idx].p14s5icon" class="p8iconos"></b-img>
                  </div>
                  <div class="p-1 text-justify " style="width: 85%">
                    <h4><strong>{{item.p14s5title}}</strong></h4>
                  </div>                      
                </div>
                <div class>
                  <p class="text-justify">{{item.p14s5descript}}</p>
                </div>
              </b-col>
            </b-row>
            <br>
          </b-container>
        </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p14s5title": [
      {
        "p14s5titleF": true,
        "p14s5titleT": "Look at the prices of the coverages that interest you most and get an online policy"
      }
    ],
    "p14s5text": "If you are an undergraduate or postgraduate student, or study in an official or professional master program, MBA or other similar categories, in an Optional practical training (OPT) or curricular practical training (CPT), if you are going to do your internships within Spain or you are a Spanish who is going to do his internship in some European Union country, you can opt for the student insurance plan.",
    "p14s51items": [
      {
        "p14s5title": "What is its scope?",
        "p14s5descript":
          "The insurance plan for students undergoing community or non-community internships will cover you anywhere in the European Union."
      },
      {
        "p14s5title": "What are my options?",
        "p14s5descript":
          "You have the opportunity to choose between Accident and Liability Insurance and Travel Insurance, or even both."
      },
      {
        "p14s5title": "What are the payment options?",
        "p14s5descript":
          "You can pay by payment by credit or debit card."
      },
      {
        "p14s5title": "How to register?",
        "p14s5descript":
          "The registration of the insurance is online, data regarding the start and end dates of the internship, the DNI, NIE or Passport of the student ahve to be entered."
      },
      {
        "p14s5title": "What is the backup?",
        "p14s5descript":
          "The system will give you a proof of payment and send the policy to the email address that you have provided."
      },
      {
        "p14s5title": "Is there any discount?",
        "p14s5descript":
          "If you obtained your internship in companies through AICAD Business School, you will get € 20 discount on your insurance."
      }
    ]
  },
  "es":{
    "p14s5title": [
      {
        "p14s5titleF": true,
        "p14s5titleT": "Mira los precios de las coberturas que más te interesan y obtén una póliza online"
      }
    ],
    "p14s5text": "Si eres un estudiante pregrado o postgrado, másteres oficiales o profesionales, MBA u otras categorías análogas, en Formación práctica opcional (OPT) o Formación práctica curricular (CPT), comunitario o no comunitario, que vas a realizar tus prácticas dentro de España o eres un español que va a realizar sus prácticas en algún país de la Unión Europea, puedes optar por el plan de seguro para estudiantes.",
    "p14s51items": [
      {
        "p14s5title": "¿Cuál es su alcance?",
        "p14s5descript":
          "El plan de seguro para estudiantes en prácticas comunitarios o no comunitarios te cubrirá en cualquier parte de la Unión Europea."
      },
      {
        "p14s5title": "¿Qué opciones tengo?",
        "p14s5descript":
          "Tienes la oportunidad de elegir entre Seguro de accidentes y responsabilidad civil y Seguro de desplazamiento, o incluso ambos."
      },
      {
        "p14s5title": "¿Cuáles son las formas de pago?",
        "p14s5descript":
          "Puedes cancelar mediante pago con tarjeta de crédito o débito."
      },
      {
        "p14s5title": "¿Cómo es el registro?",
        "p14s5descript":
          "El alta de asegurado es online, definiendo las fechas de inicio y fin de las prácticas, el DNI, NIE o Pasaporte del estudiante."
      },
      {
        "p14s5title": "¿Cuál es el respaldo?",
        "p14s5descript":
          "El sistema te dará un comprobante de pago y enviará la póliza a la dirección de correo electrónico que suministres."
      },
      {
        "p14s5title": "¿Existe algún descuento?",
        "p14s5descript":
          "Si obtuviste tus prácticas en empresas a través de AICAD Business School, obtendrás 20€ de descuento en tu seguro."
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p14s51itemsI: [
        {
          p14s5icon: require("@/assets/images/iconos/page14/alcance.png")
        },
        {
          p14s5icon: require("@/assets/images/iconos/page14/adaptable.png")
        },
        {
          p14s5icon: require("@/assets/images/iconos/page14/pago.png")
        },
        {
          p14s5icon: require("@/assets/images/iconos/page14/alta.png")
        },
        {
          p14s5icon: require("@/assets/images/iconos/page14/respaldo.png")
        },
        {
          p14s5icon: require("@/assets/images/iconos/page14/descuentos.png")
        }
      ]
    }
  }, 
  computed: {
    p14s5title() {
      return this.$t("p14s5title");
    },
    p14s51items() {
      return this.$t("p14s51items");
    }
  }
};
</script>
