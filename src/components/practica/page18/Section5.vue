<template>
  <div id="section5">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container class="text-center">
          <br />
          <div class="ptab">
            <b-card no-body>
              <b-tabs style="background: silver">
                <b-tab align="left" v-for="(item ,idx) in p18s5tab" :key="idx" :title="item.tabT" v>
                  <b-card-text style="background: silver">
                    <b-row>
                      <b-col md="6" sm="12" v-for="(item1, idx1) in item.contenido" :key="idx1">
                        <div class="d-flex align-items-center">
                          <div class="text-center p-1" style="width: 20%">
                            <b-img :src="p18s5tabI[idx].contenido[idx1].icon" class="p8iconos" />
                          </div>
                          <div class="text-justify p-1" style="width: 80%">
                            <h4>
                              <strong>{{item1.titulo}}</strong>
                            </h4>
                          </div>
                        </div>
                        <div>
                          <p class="text-justify">
                            <span v-for="(item2 ,idx2) in item1.text" :key="idx2">
                              <strong v-if="item2.txtS">{{item2.txt}}</strong>
                              <span v-else>{{item2.txt}}</span>
                            </span>
                          </p>
                          <br />
                        </div>
                      </b-col>
                    </b-row>
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
            <br />
          </div>
          <br />
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p18s5tab": [
      {
          "tabT": "NEW ALTERNATIVES for UNIVERSITIES and Career Centers"
        ,  "contenido": [
          {
              "titulo": "Send business internship offers to your students easily"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "We create a software that sends monthly newsletters with the latest internship offers to the people in charge in the University internship office so that they can forward them to the students."
              }
            ]
          },
          {
              "titulo": "Get new offers on the University Intranet throughout the year"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Our team will be in charge of publishing internship announcements within the University Intranet if there is one. All the in-company internship offers will follow the institutional formats and structures of the university portals."
              }
            ]
          },
          {
              "titulo": "Contact us for immediate answers"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "We seek to build and maintain a permanent collaboration with both local and foreign universities from other parts of the world. Therefore, we have a team of consultants prepared to advise the Career Center of each University."
              }
            ]
          },
          {
              "titulo": "Increase the chances of success of your students during the selection processes"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Many students who find their in-company internships through us come from universities with which we have an excellent relationship and successful collaboration agreements. "
              },
              {
                  "txtS": true
                ,  "txt": "You can contact us to find out about the advantages of being a Partner University."
              }
            ]
          }
        ]
      },
      {
          "tabT": "NEW ALTERNATIVES for prospective interns"
        ,  "contenido": [
          {
              "titulo": "How to choose the ideal in-company internship?"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Our entire selection process begins with an orientation interview that helps the student to look for internship offers in companies related to their area and that are useful to develop their skills and put into practice their knowledge and academic training."
              }
            ]
          },
          {
              "titulo": "How to excel in interviews?"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Regardless of the interview type, the students will receive from us a series of tools to know how to react to difficult questions and be aware of how to handle their body expression and speech."
              }
            ]
          },
          {
              "titulo": "Where to live?"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Our team manages a wide range of information on different geographical locations, so they can advise the students on neighborhoods, prices, agency and on how to find an accommodation adapted to their needs during the period of internships."
              }
            ]
          },
          {
              "titulo": "How to create a CV that stands out?"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Both the design, format and content of the CV are important because they must be adapted to the expectations of the company. That is why our consultants help to guide students in creating a CV that can stand out from other candidates."
              }
            ]
          }
        ]
      },
      {
          "tabT": "Our GREATEST STRENGTHS"
        ,  "contenido": [
          {
              "titulo": "We speed up the interview process and shorten the paperwork"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "We easily coordinate all the procedures related to information and documents to complete and sign the internship agreement, manage residence insurance and permits or the completion evaluations. All of this is done in record time thanks to the experience of our team."
              }
            ]
          },
          {
              "titulo": "Effective processing of the internship agreement "
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Facilitating the transit of information and documents to complete and sign the internship agreement, presenting the insurance and residence permits, or processing the practice completion evaluations are priorities for our team."
              }
            ]
          },
          {
              "titulo": "Diversity of internship offers in all areas"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "We give you information about offers from multinationals, Start-Ups, hotels and businesses in general that offer internships in various areas such as marketing, sales, languages, engineering, companies, tourism, etc."
              }
            ]
          },
          {
              "titulo": "We cooperate with companies that have extensive experience and competitive benefits"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "The offers of internships presented on our portal and that we publish in the university intranets are fully trustworthy. We make sure to work with the best companies that offer the widest possibilities. In addition, we ensure that they provide benefits such as reasonable monthly remuneration."
              }
            ]
          }
        ]
      }
    ]
  },
  "es":{
    "p18s5tab": [
      {
          "tabT": "NUEVAS ALTERNATIVAS para UNIVERSIDADES y Career Centre"
        ,  "contenido": [
          {
              "titulo": "Envía fácilmente las ofertas de prácticas en empresas a tus estudiantes"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Creamos un software que envía newsletters mensuales con las ofertas de prácticas en empresas más recientes a los responsables de la oficina de prácticas de la Universidad para que pueda reenviarlas a los estudiantes."
              }
            ]
          },
          {
              "titulo": "Obtén nuevas ofertas en la Intranet Universitaria durante todo el año"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Nuestro equipo se ocupará de publicar contenido de calidad dentro de la Intranet de universidades si éstas la poseen. Todas las ofertas de prácticas en empresas seguirás los formatos y estructuras institucionales del portal universitario."
              }
            ]
          },
          {
              "titulo": "Contáctanos para obtener respuestas inmediatas"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Buscamos construir y mantener una colaboración constante y permanente con Universidades tanto locales como de otras partes del mundo. Por ello, contamos con un equipo de consultores preparados para dar asesoría al Career Centre de cada UnIversidad."
              }
            ]
          },
          {
              "titulo": "Incrementa las probabilidades de éxito de tus estudiantes durante los procesos de selección"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Muchos estudiantes que encuentran sus prácticas en empresas por nuestro medio provienen de universidades con las que tenemos una excelente relación y acuerdos de colaboración exitosos. "
              },
              {
                  "txtS": true
                ,  "txt": "Puedes contactar con nosotros para informarte sobre las ventajas de ser una Universidad Partner."
              }
            ]
          }
        ]
      },
      {
          "tabT": "NUEVAS ALTERNATIVAS para futuros ESTUDIANTES de práctica"
        ,  "contenido": [
          {
              "titulo": "¿Cómo elegir la práctica en empresas ideal?"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Todo nuestro proceso de selección comienza con una entrevista de orientación que ayuda al estudiante a buscar ofertas de prácticas en empresas relacionadas con su área y que le sean de utilidad para desarrollar sus habilidades y poner en práctica sus conocimientos y formación académica."
              }
            ]
          },
          {
              "titulo": "¿Cómo sobresalir en las entrevistas?"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Sin importar el medio por el cual se de la entrevista, el estudiante recibirá de parte nuestra una serie de herramientas para saber reaccionar ante preguntas difíciles y ser consciente del manejo de su expresión corporal y discurso. "
              }
            ]
          },
          {
              "titulo": "¿En dónde vivir?"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Nuestro equipo maneja una amplia gama de información sobre distintos lugares geográficos, por lo que pueden ofrecerle al estudiante asesoría sobre barrios, precios, agencia y cómo encontrar una vivienda adaptada a sus necesidades durante el período que dure la práctica en empresas."
              }
            ]
          },
          {
              "titulo": "¿Cómo crear un CV que destaque?"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Tanto el diseño, formato y contenido del CV son importantes porque deben ser adaptados a las expectativas de la empresa. Es por ello que nuestros consultores ayudan a orientar a los estudiantes en la creación de un CV que pueda destacar por sobre otros candidatos."
              }
            ]
          }
        ]
      },
      {
          "tabT": "Nuestras FORTALEZAS MÁS GRANDES"
        ,  "contenido": [
          {
              "titulo": "Agilizamos el proceso de entrevistas y acortamos los trámites"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Coordinamos con facilidad todos los trámites relacionados con información y documentos para completar y firmar el convenio de prácticas, gestionar los seguros y permisos de residencias o las evaluaciones de finalización de prácticas. Todo esto en tiempo récord gracias a la experiencia de nuestro equipo."
              }
            ]
          },
          {
              "titulo": "Tramitación efectiva del convenio de práctica"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Facilitar el tránsito de información y documentos para completar y hacer firmar el convenio de prácticas, presentar los seguros y permisos de residencia, o tramitar las evaluaciones de finalización de práctica son una prioridad para nuestro equipo."
              }
            ]
          },
          {
              "titulo": "Diversidad de ofertas de prácticas en empresas en todas las áreas"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Te damos información sobre ofertas de multinacionales, Start-Ups, hoteles y comercios en general que ofrecen prácticas en diversas áreas como marketing, ventas, idiomas, ingeniería,  empresas, turismo, etc."
              }
            ]
          },
          {
              "titulo": "Contamos con empresas de amplia trayectoria y prestaciones competitivas"
            , "text": [
              {
                  "txtS": false
                ,  "txt": "Las ofertas de prácticas en empresas que tenemos en nuestro portal y que publicamos en las intranet universitarias son de plena confianza, ya que nos aseguramos de trabajar con las mejores empresas, con la más amplia trayectoria. Además, nos aseguramos de que éstas brinden beneficios como remuneraciones mensuales razonables."
              }
            ]
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
      p18s5tabI: [
        {
          contenido: [
            {
              icon: require("@/assets/images/vectores/page18/universidades/enviar-practicas.png")
            },
            {
              icon: require("@/assets/images/vectores/page18/universidades/ofertastodoelaño.png")
            },
            {
              icon: require("@/assets/images/vectores/page18/universidades/llamadas.png")
            },
            {
              icon: require("@/assets/images/vectores/page18/universidades/exitoseleccion.png")
            }
          ]
        },
        {
          contenido: [
            {
              icon: require("@/assets/images/vectores/page18/estudiantes/practicaadecuada.png")
            },
            {
              icon: require("@/assets/images/vectores/page18/estudiantes/entrevistasobresaliente.png")
            },
            {
              icon: require("@/assets/images/vectores/page18/estudiantes/alojamiento.png")
            },
            {
              icon: require("@/assets/images/vectores/page18/estudiantes/cvganador.png")
            }
          ]
        },
        {
          contenido: [
            {
              icon: require("@/assets/images/vectores/page18/fortalezas/procesosrapidos.png")
            },
            {
              icon: require("@/assets/images/vectores/page18/fortalezas/tramitacionpracticas.png")
            },
            {
              icon: require("@/assets/images/vectores/page18/fortalezas/diversidadofertas.png")
            },
            {
              icon: require("@/assets/images/vectores/page18/fortalezas/empresasconfianza.png")
            }
          ]
        }
      ]
    };
  }, 
  computed: {
    p18s5tab() {
      return this.$t("p18s5tab");
    }
  }
};
</script>