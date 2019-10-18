<template>
  <div id="section3">
    <div class="fondoWhite" >
      <b-container fluid>
        <b-container class="text-center">
          <b-row>
            <b-col lg="6" md="12" class="text-center"
            v-for="(item, idx) in p17s2columnas" :key="idx">
              <h3 class="m-3 p-4">
                {{item.titulo}}
              </h3>
              <b-card no-body footer-tag="footer" class="p4card cardd2">
                <b-card-body>
                  <b-row align-h="center">
                    <b-col cols="11" v-for="(item2, idx2) in item.lista" :key="idx2">
                      <div class="d-flex align-items-center m-2">
                        <div class="text-center" style="width: 20%">
                          <b-img :src="p17s2columnasI[idx].lista[idx2].icon" class="p8iconos"></b-img>
                        </div>
                        <div class="text-left" style="width: 80%">
                          <h4><strong>{{item2.subtitulo}}</strong></h4>
                        </div>                      
                      </div>
                      <div>
                        <p class="text-justify">
                          {{item2.texto}}
                        </p>
                      </div>
                      <br>
                    </b-col>
                  </b-row>
                  <h3>
                    {{item.texto}}
                  </h3>
                </b-card-body>
                <b-card-footer slot="footer" class="p4cardfooter">
                <a class="btn buttonTurqueza" :href="item.urlBtn" target="_blank">
                  <span v-for="(item2, idx2) in item.textBtn" :key="idx2">
                    <strong v-if="item2.txtS">
                      {{item2.txt}}
                    </strong>
                  </span>
                </a>
                </b-card-footer>
              </b-card>
              <div style="margin: 0.5em">&nbsp;</div>
              <br>
            </b-col>
          </b-row>
          <div style="margin: 0.5em">&nbsp;</div>
          <br>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p17s2columnas": [
      {
        "titulo": "What do we offer to Universities and Career Centers?"
        , "texto": "See more information about the advantages of being a Partner University"
        , "urlBtn": "https://jobs.aicad.es"
        , "textBtn": [
          {
            "txtS": false
            , "txt": "BECOME A PARTNER UNIVERSITY"
          },
          {
            "txtS": true
            , "txt": "CONTACT US"
          }
        ]
        , "lista": [
          {
            "subtitulo": "We work together with prestigious universities"
            ,"texto": "We seek to build and maintain a constant and permanent collaboration with both local and foreign universities."
          },
          {
            "subtitulo": "We simplify the search for internships in companies"
            ,"texto": "We help you manage everything related to the selection of students for hundreds of companies that have already been recognized as excellent options for professional internships."
          },
          {
            "subtitulo": "We provide advice to students"
            ,"texto": "We advise students throughout the election process and take care to help them live the best experience during their internships."
          }
        ]
      },
      {
        "titulo": "Alternatives for Student Mobility Agencies and Work and Travel:"
        , "texto": "Find out about the advantages of being a Partner Agency"
        , "urlBtn": "https://jobs.aicad.es"
        , "textBtn": [
          {
            "txtS": false
            , "txt": "BECOME A PARTNER AGENCY"
          },
          {
            "txtS": true
            , "txt": "CONTACT US"
          }
        ]
        , "lista": [
          {
            "subtitulo": "Diversity of internship offers"
            ,"texto": "We manage practices in collaborating companies throughout Spain throughout the year and in all types of professional areas."
          },
          {
            "subtitulo": "Work together with student mobility agencies"
            ,"texto": "We seek to collaborate with student mobility agencies and Work and Travel to give clients a wide variety of internship offers in Spain."
          },
          {
            "subtitulo": "We provide advice for the student visa application"
            ,"texto": "We provide support to partner agencies throughout the selection process and in the management of documentation and procedures for the student visa application."
          }
        ]
      }
    ]
  },
  "es":{
    "p17s2columnas": [
      {
        "titulo": "¿Qué le ofrecemos a las Universidades y Career Centres?"
        , "texto": "Consulta más información sobre las ventajas de ser Universidad Partner"
        , "urlBtn": "https://jobs.aicad.es"
        , "textBtn": [
          {
            "txtS": false
            , "txt": "CONVIÉRTETE EN UNIVERSIDAD PARTNER"
          },
          {
            "txtS": true
            , "txt": "CONTÁCTANOS"
          }
        ]
        , "lista": [
          {
            "subtitulo": "Trabajamos en conjunto con Universidades de gran prestigio"
            ,"texto": "Buscamos construir y mantener una colaboración constante y permanente con Universidades tanto locales como de otras partes del mundo."
          },
          {
            "subtitulo": "Simplificamos la búsqueda de prácticas en empresas"
            ,"texto": "Te ayudamos a gestionar todo lo relacionado a la selección de estudiantes para cientos de empresas que ya han sido reconocidas como excelentes opciones para las prácticas profesionales."
          },
          {
            "subtitulo": "Brindamos asesoría a los estudiantes"
            ,"texto": "Asesoramos a los estudiantes durante todo el proceso de elección y nos encargamos de ayudarles para que vivan la mejor experiencia durante las prácticas en empresas."
          }
        ]
      },
      {
        "titulo": "Alternativas para Agencias de movilidad estudiantil y Work and Travel:"
        , "texto": "Infórmate de las ventajas ser Agencia Partner"
        , "urlBtn": "https://jobs.aicad.es"
        , "textBtn": [
          {
            "txtS": false
            , "txt": "CONVIÉRTETE EN AGENCIA PARTNER"
          },
          {
            "txtS": true
            , "txt": "CONTÁCTANOS"
          }
        ]
        , "lista": [
          {
            "subtitulo": "Diversidad de ofertas de prácticas en empresas"
            ,"texto": "Realizamos gestiones de prácticas en empresas colaboradoras de toda España durante todo el año y en todo tipo de áreas profesionales."
          },
          {
            "subtitulo": "Trabajo en conjunto con agencias de movilidad estudiantil"
            ,"texto": "Buscamos colaborar con agencias de movilidad estudiantil y Work and Travel para darle a los clientes una gran variedad de ofertas de prácticas en empresas de España."
          },
          {
            "subtitulo": "Brindamos asesoría para la solicitud de la visa de estudiante"
            ,"texto": "Brindamos apoyo a las agencias partner durante todo el proceso de selección y en la gestión de la documentación y de trámites para la solicitud del visado de estudiantes."
          }
        ]
      }
    ]
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p17s2columnasI: [
        {
          lista: [
            {
              icon: require("@/assets/images/vectores/page17/colaboracionuniversidades.png") 
            },
            {
              icon: require("@/assets/images/vectores/page17/busquedapract.png") 
            },
            {
              icon: require("@/assets/images/vectores/page17/asesoramientoestudiantes.png") 
            }
          ]
        },
        {
          lista: [
            {
              icon: require("@/assets/images/vectores/page17/variedadpracticas.png") 
            },
            {
              icon: require("@/assets/images/vectores/page17/colaboracionagenciamovilidad.png") 
            },
            {
              icon: require("@/assets/images/vectores/page17/asesoriavisaestudiante.png") 
            }
          ]
        }
      ]
    };
  },
  computed: {
    p17s2columnas() {
      return this.$t("p17s2columnas");
    }
  }
};
</script>