<template>
  <div id="section3">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <b-row>
            <b-col md="8" sm="12">
              <h3>{{$t("p4s3title")}}</h3>
              <p class="text-justify">{{$t("p4s3desc")}}</p>
              <br />
              <p>{{$t("p4s3desc1")}}</p>
              <br />
              <b-row>
                <b-col v-for="(item ,idx) in p4s3list" :key="idx" cols="12">
                  <b-row align-v="start">
                    <b-col cols="1" class="text-center">
                      <div v-responsive.md.lg.xl>
                        <b-img :src="p4s3listI[idx].p4s3licon" class="p4s2icon"></b-img>
                      </div>
                      <div class="icon_list_connector" v-if="item.p4s3lflag" v-responsive.md.lg.xl></div>
                      <div class="icon_list_connector_not" v-else></div>
                    </b-col>
                    <b-col cols="11">
                      <h4 style="margin-bottom: 0.6em"><strong>{{item.p4s3ltitle}}</strong></h4>
                      <p class="text-justify" style="font-size: 0.7em">{{item.p4s3ldesc}}</p>
                      <br />
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
            <b-col md="4" sm="12">
              <b-img :src="p4s3img"></b-img>
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
    "p4s3title": "What details should I know about the internship agreement?",
    "p4s3desc":
      "The entire structure of an internship agreement can vary depending on the format that each educational institution considers necessary. However, the content is usually the same because the main objective of the internship agreement is to describe the tasks, conditions and duration of the internships in companies and, at the same time, define the parties involved (the student, the university and the partner company).",
    "p4s3desc1":
      "The structure of the agreement is usually divided into four sections and a large number of articles:",
    "p4s3list": [
      {
        "p4s3ltitle": "The parties involved in the agreement",
        "p4s3ldesc":
          "Every internship agreement in companies begins with the statement of academic collaboration, which specifies the educational institution and the company, as well as the legal representatives, their addresses and their contact information, in addition to other general data.",
        "p4s3lflag": true
      },
      {
        "p4s3ltitle":
          "The training project for internships",
        "p4s3ldesc":
          "The training project describes the tasks of the position of the internship, as well as indicates the start and end dates of the practices, the type of working day and the benefits that the student will enjoy (food, accommodation, etc.).",
        "p4s3lflag": true
      },
      {
        "p4s3ltitle": "Regulations and regulations of the internship agreement",
        "p4s3ldesc":
          "It is related to the whole part of regulatory norms of the agreement and the regulations concerning the protection of data, both of the university and of the company where the professional practices will be done.",
        "p4s3lflag": true
      },
      {
        "p4s3ltitle": "Insurance and coverage",
        "p4s3ldesc":
          "The internship agreements include information on student insurance or the coverage that the university provides to the student during the internship period. The trainee is also allowed to indicate any extra policy that gives him/her additional insurance (in the case of internships in companies abroad).",
        "p4s3lflag": false
      }
    ]
  },
  "es":{
    "p4s3title": "¿Qué detalles debo conocer del convenio de prácticas en empresas?",
    "p4s3desc":
      "Toda la estructura de un convenio de prácticas en empresas puede cambiar en el orden de los detalles que contiene, y eso depende del formato que cada casa de estudios considere necesario. No obstante, el contenido suele ser igual debido a que el principal objetivo del convenio de prácticas es el de describir las tareas, condiciones y duración de las prácticas en empresas y, al mismo tiempo, definir quiénes son las partes involucradas (el estudiante, la universidad y la empresa).",
    "p4s3desc1":
      "La estructura del convenio suele dividirse en cuatro secciones y un gran número de artículos:",
    "p4s3list": [
      {
        "p4s3ltitle": "Las partes involucradas en el convenio",
        "p4s3ldesc":
          "Todo convenio de prácticas en empresas comienza por el acuerdo marco de colaboración académica, en donde se especifican la casa de estudios y la empresa, así como los representantes legales, sus domicilios y su información de contacto, además de otros datos generales.",
        "p4s3lflag": true
      },
      {
        "p4s3ltitle":
          "El proyecto de formación de las prácticas en empresas",
        "p4s3ldesc":
          "El proyecto de formación describe las tareas del puesto dentro de las prácticas en empresas, además de señalar las fechas de inicio y fin de las prácticas, el tipo de jornada y los beneficios de los que gozará el estudiante (comida, alojamiento, etc).",
        "p4s3lflag": true
      },
      {
        "p4s3ltitle": "Reglamentación y normativa del convenio de prácticas",
        "p4s3ldesc":
          "Está relacionada con toda la parte de normas reguladoras del convenio y los reglamentos concernientes a la protección de datos, tanto de la universidad como de la empresa en donde se harán las prácticas profesionales.",
        "p4s3lflag": true
      },
      {
        "p4s3ltitle": "Seguros y coberturas",
        "p4s3ldesc":
          "Los convenios de prácticas en empresas incluyen información sobre el seguro para estudiantes o las coberturas que la universidad proporciona al estudiante durante el desarrollo de la actividad. También se le permite al becario indicar cualquier póliza extra que le dé seguridad adicional (para el caso de las prácticas en empresas en el extranjero).",
        "p4s3lflag": false
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p4s3img: require("@/assets/images/woman.jpg"),
      p4s3listI: [
        {
          p4s3licon: require("@/assets/images/iconos/page4/intervinientes.png")
        },
        {
          p4s3licon: require("@/assets/images/iconos/page4/proyecto.png")
        },
        {
          p4s3licon: require("@/assets/images/iconos/page4/reglamentacion.png")
        },
        {
          p4s3licon: require("@/assets/images/iconos/page4/seguros.png")
        }
      ]
    };
  },
  computed: {
    p4s3list(){
      return this.$t("p4s3list");
    }
  }
};
</script>

<style>
.p4s2icon {
  margin: 0.3em 0;
  width: 98vw !important;
  height: auto;
  z-index: 2;
}

.icon_list_connector {
  top: 3em;
  left: 2rem;
  width: 1px !important;
  border-left-width: 1px;
  border-right-width: 1px;
  border-left-style: dashed;
  border-right-style: dashed;
  height: 4rem;
  z-index: 1;
  position: absolute;
}

.icon_list_connector_not {
  top: 3em;
  left: 2em;
  width: 1px !important;
  border-left-width: 1px;
  border-right-width: 1px;
  height: 5rem;
  z-index: 1;
  position: absolute;
}
</style>
