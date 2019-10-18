<template>
  <div id="section1">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <br />
          <h2>
            <span v-for="(item, index) in title" :key="index">
              <strong v-if="item.titleF">{{item.titleT}}</strong>
              <span v-else>{{item.titleT}}</span>
            </span>
          </h2>
          <div role="tablist">
            <b-card no-body class="mb-1" v-for="(item, index) in list" :key="index">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle="'accordion-'+index" class="buttonTurqueza1">
                  <b-row align-h="center" align-v="center">
                    <b-col md="11" sm="12" class="text-left">
                      <font-awesome-icon :icon="['fas', 'asterisk']" />
                      {{item.quest}}
                    </b-col>
                    <b-col md="1" sm="12" class="text-center">
                      <font-awesome-icon :icon="['fas', 'caret-square-down']" />
                    </b-col>
                  </b-row>
                </b-button>
              </b-card-header>
              <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <p class="text-justify" v-show="item.resp.textShow">
                      <span v-for="(item1, index1) in item.resp.text" :key="index1">
                        <strong v-if="item1.txtS">{{item1.txt}}</strong>
                        <span v-else>{{item1.txt}}</span>
                      </span>
                    </p>
                    <ul v-if="item.resp.list1Show" style="padding-left: 1em;">
                      <li v-for="(item1, index1) in item.resp.list1" :key="index1">
                        <span v-for="(item2, index2) in item1.text1" :key="index2">
                          <strong v-if="item2.txtS">{{item2.txt}}</strong>
                          <span v-else>{{item2.txt}}</span>
                        </span>
                      </li>
                    </ul>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
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
    "title": [
      {
        "titleF": true,
        "titleT": "Contents"
      }
    ],
    "list": [
      {
        "quest":
          "What should I do to get an internship in companies?",
        "resp": {
          "text": [
            {
              "txtS": false
              , "txt": "In fact, although it is usually called an internship contract, "
            },
            {
              "txtS": true
              , "txt": "what is signed is an educational cooperation agreement between the university or study center and the company, for the realization of the internship of a certain student who is still studying."
            }
          ]
          , "textShow": true
          ,"list1": null
          , "list1Show": false
        }
      },
      {
        "quest":
          "Is the intern an employee?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "No, because there is no labor relationship between the intern and the company. The agreement is between the university and the company."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      },
      {
        "quest":
          "Is it mandatory to pay the intern?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "Remuneration is not mandatory. However,  it is up to each agreement whether any financial compensations  such as reimbursement for transportation or meal payments would  be made."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      },
      {
        "quest":
          "How long does the internship contract last?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "The duration of the internship will depend on what has been agreed between the university/ study center and the company. Usually, the duration is between 3 to 6 months or a year."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      }, 
      {
        "quest":
          "What is the content of the internship contract?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": " The internship agreement with the educational center usually has the following sections:"
            }
          ]
          , "textShow": true
          ,"list1":[
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Identity information about the signatories"
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Description of the to be carried out internship"
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Regulations of the agreement"
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Insurance that the internship may provided"
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Remuneration of the intern, if applicable"
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Schedule, obligations, rights etc."
                }
              ]
            }
          ]
          , "list1Show": true
        }
      }, 
      {
        "quest":
          "What types of internships are there?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "As a general rule, we usually define two types of practices:"
            }
          ]
          , "textShow": true
          ,"list1":[
            {
              "text1":[
                {
                  "txtS": true
                  , "txt": "Curricular. "
                },
                {
                  "txtS": false
                  , "txt": "These are the ones that are mandatory for obtaining a degree."
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": true
                  , "txt": "Extracurricular."
                },
                {
                  "txtS": false
                  , "txt": "These are the ones that the student performs voluntarily."
                }
              ]
            }
          ]
          , "list1Show": true
        }
      },
      {
        "quest":
          "What type of work can an intern do?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "The internship is aimed at helping the intern to integrate in the labor world, so the activities that you carry out during "
            },
            {
              "txtS": true
              , "txt": "the internship must be related to the courses that the student is studying."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      },
      {
        "quest":
          "What warranties does the Social Security give an intern who possesses an internship contract?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "An intern who contributes to the Security through the “internship contract” is entitled to benefits for retirement, disability and temporary disability due to a work accident or illness, but is NOT entitled to unemployment benefits. The contribution base is the minimum of the General Regime for contracts for training and learning."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      },
      {
        "quest":
          "What rights does the internship contract give?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "The intern must have a "
            },
            {
              "txtS": true
              , "txt": "tutor in the company "
            },
            {
              "txtS": false
              , "txt": "(it is mandatory: remember that the student is not an employee). The tutor must follow the intern’s evolution, give him/her guidelines for the performed tasks, train him/her for the prevention of occupational risks, and advise regarding the rules of the company. At the end of the internship, the tutor must write a report regarding the tasks performed, the total hours spent in the internship and the objectives achieved. If asked by the intern, the tutor can also issue a certificate with regard to the successful conduction of the internship."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      },
      {
        "quest":
          "What is the difference between an agreement to carry out an internship (internship contract) and an apprenticeship contract?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "The agreement to carry out an internship is focused on students who are still studying and, as a general rule, are in their last years of education. "
            },
            {
              "txtS": true
              , "txt": "The apprenticeship contract, however, is an employment contract focused on recent graduates who lack experience. "
            },
            {
              "txtS": false
              , "txt": "In case you consider to host an intern, before signing the agreement, consult with a lawyer regarding  the rights and obligations."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      }
    ]
  },
  "es":{
    "title": [
      {
        "titleF": true,
        "titleT": "Contenidos"
      }
    ],
    "list": [
      {
        "quest":
          "¿Se firma un contrato de becario para iniciar las prácticas?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "En realidad aunque suele llamar contrato de becario, "
            },
            {
              "txtS": true
              , "txt": "lo que se firma es un acuerdo de cooperación educativa, entre la universidad o centro de estudios y la empresa, para la realización de prácticas de un determinado alumno que sigue estudiando."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      },
      {
        "quest":
          "¿El becario es un empleado?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "No, porque no existe una relación laboral entre el becario y la empresa, sino solo un convenio entre la universidad y la empresa."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      },
      {
        "quest":
          "¿Es obligatorio remunerar al becario?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "No es obligatoria la remuneración, pero dependerá de cada acuerdo el que se pacten compensaciones económicas o pagos como el abono transporte o las comidas."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      }, 
      {
        "quest":
          "¿Cuánto dura el contrato de becario en prácticas?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "La duración de las prácticas dependerá de lo que se haya pactado entre el centro de estudios y la empresa, por lo general, suele ser de entre 3, 6 meses o un año."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      }, 
      {
        "quest":
          "¿Qué contenido tiene un convenio de  prácticas?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "El convenio en prácticas con el centro educativo, suele tener los siguientes apartados:"
            }
          ]
          , "textShow": true
          ,"list1":[
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Identificación de los firmantes"
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Descripción de las prácticas a realizar"
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Normativa que regula el acuerdo"
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Seguros que puedan incluir las prácticas"
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Remuneración del becario, en su caso"
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": false
                  , "txt": "Horario, obligaciones, derechos etc."
                }
              ]
            }
          ]
          , "list1Show": true
        }
      }, 
      {
        "quest":
          "¿Qué tipos de prácticas existen?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "Por regla general, se suele hablar de dos tipos de prácticas:"
            }
          ]
          , "textShow": true
          ,"list1":[
            {
              "text1":[
                {
                  "txtS": true
                  , "txt": "Curriculares. "
                },
                {
                  "txtS": false
                  , "txt": "Son las que son obligatorias para obtener un título."
                }
              ]
            },
            {
              "text1":[
                {
                  "txtS": true
                  , "txt": "Extracurriculares."
                },
                {
                  "txtS": false
                  , "txt": "Son las que realiza el alumno de forma voluntaria."
                }
              ]
            }
          ]
          , "list1Show": true
        }
      },
      {
        "quest":
          "¿Qué labores puede realizar un becario?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "Las prácticas de un becario están enfocadas a que se incorpore al mundo laboral, por lo que las actividades que realice durante "
            },
            {
              "txtS": true
              , "txt": "las prácticas deberán estar relacionada con los estudios que esté cursando."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      },
      {
        "quest":
          "¿Qué supone la cotización a la Seguridad Social para un becario con convenio de prácticas?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "Un becario que cotice a la Seguridad a través de un “contrato de becario” tiene derecho a prestaciones de jubilación, invalidez e incapacidad temporal por accidente laboral o enfermedad común, pero NO tiene derecho a prestación por desempleo. La base de cotización es la mínima del Régimen General para los contratos para la formación y el aprendizaje."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      },
      {
        "quest":
          "¿Qué derechos tiene un contrato de becario?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "El becario deberá tener un "
            },
            {
              "txtS": true
              , "txt": "tutor en la empresa "
            },
            {
              "txtS": false
              , "txt": "(es obligatorio, recuerda que no es un trabajador) este tutor debe seguir su evolución, darles pautas para las tareas que va realizar, formarlo sobre la prevención de riesgos laborales, las normas de la empresa y al finalizar las prácticas debe hacer un informe sobre las tareas realizadas, el total de horas en prácticas y lo objetivos alcanzados. También puede emitir si el alumno se lo pide un certificado de prácticas y de buena conducta."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
      },
      {
        "quest":
          "¿Qué diferencia hay entre un convenio para realizar prácticas y un contrato en prácticas?",
        "resp": {
          "text":[
            {
              "txtS": false
              , "txt": "El convenio para realizar prácticas va enfocado a alumnos que todavía están estudiando, por regla general se encuentran en los últimos años de carrera. "
            },
            {
              "txtS": true
              , "txt": "El contrato en prácticas, sin embargo es un contrato laboral enfocado a los recién titulados y que carecen de experiencia. "
            },
            {
              "txtS": false
              , "txt": "En el caso en que desees contratar a un becario, consulta con un abogado o un asesor laboral los derechos y obligaciones antes de firmar el convenio."
            }
          ]
          , "textShow": true
          ,"list1":[]
          , "list1Show": false
        }
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
    title() {
      return this.$t("title");
    },
    list() {
      return this.$t("list");
    }
  }
};
</script>
