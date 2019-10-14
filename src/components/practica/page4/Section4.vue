<template>
  <div id="section4">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <br>
          <h2>
            {{$t("p4s4title")}}
          </h2>
          <br>
          <p class="text-justify">
            {{$t("p4s4desc")}}
          </p>
          <br>
          <div class="ptab">
            <b-card no-body>
              <b-tabs v-model="tabIndex" justified  >
                <b-tab  align="left"
                  v-for="(item ,idx) in p4s4tab" :key="idx"
                    :title="item.p4s4tabT" v >
                  <b-card-text>
                    <h3><strong>{{item.p4s4tabTtitle}}</strong></h3>
                    <br>
                    <p class="text-justify" v-for="(item1 ,idx1) in item.p4s4tabTd" :key="idx1">
                      <a :href="item1.p4s4tabTurl" target="_blank"
                      v-if="item1.p4s4tabTlink != ''">
                        <strong
                      style="text-decoration: underline">{{item1.p4s4tabTlink}}</strong>
                      </a>
                      <span>
                        {{item1.p4s4tabTdesc}}
                      </span>
                      <br>
                    </p>
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
            <br>
          </div>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p4s4title": "Important information to carry out procedures when receiving an intern"
    , "p4s4desc": "It is recommended to know the regulations on external internships, the types of internships and all the requirements for hiring an intern. Doing this, you can have an understanding of the entire process and thus comply with the obligations established for the student within the internship period."
    , "p4s4tab": [
      {
        "p4s4tabT": "Types of internships"
        , "p4s4tabTtitle": "There are two types of external practices: curricular and extracurricular"
        , "p4s4tabTd": [
          {
          "p4s4tabTdesc": "External curricular practices are those that are part of the curriculum, mandatory and have a certain amount of credits. Their academic load is important for getting through the academic year."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "The extracurricular or non-curricular external internships are those that the intern does voluntarily, without any obligation."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          }
        ]
      },
      {
        "p4s4tabT": "Requirements to receive an intern"
        , "p4s4tabTtitle": "Requirements to receive an intern in the company"
        , "p4s4tabTd": [
          {
          "p4s4tabTdesc": "The internships are aimed at giving the students the experience of the labor world through a direct contact with the company work environment, learning dynamic and application of the knowledge obtained in academic training."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "For this purpose, the student must meet a series of requirements to be able to get the internship opportunity:"
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "- The scholar must be a university student and get the approval of the educational institution for signing the agreement."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "- All the tasks assigned to the intern must be related to what he has learnt during his/her academic training."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          }
        ]
      },
      {
        "p4s4tabT": "Rights and obligations"
        , "p4s4tabTtitle": "Rights and obligations during professional internship"
        , "p4s4tabTd": [
          {
          "p4s4tabTdesc": "- Interns must have an academic tutor in the educational institution who can guide them during the internship."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "- Interns must have a tutor in the company who is responsible for guiding, evaluating and training during the development of the practice."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "- One of the most important aspects is to instruct the intern in relation to the internal occupational and regulatory risks of the company, and even about the Law on data protection."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "- The company must be flexible with the student and respect its academic load and duties with the university."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "- The internship agreement does not establish an employment relationship, so it does not indicate obligations and rights relevant to labor framework for any of the parties involved."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          }
        ]
      },
      {
        "p4s4tabT": "Regulations in force"
        , "p4s4tabTtitle": "Learn the three Decrees that regulate external practices"
        , "p4s4tabTd": [
          {
          "p4s4tabTdesc": ": Inclusion of internship students in the Social Security system."
          , "p4s4tabTurl": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2011-16819"
          , "p4s4tabTlink": "Royal Decree 1493/2011 of October 24"
          },
          {
          "p4s4tabTdesc": ": Regulation of external academic practices of university students."
          , "p4s4tabTurl": "https://www.boe.es/buscar/doc.php?id=BOE-A-2014-8138"
          , "p4s4tabTlink": "Royal Decree 592/14 of July 11"
          },
          {
          "p4s4tabTdesc": ": Urgent measures for growth, competitiveness and efficiency."
          , "p4s4tabTurl": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2014-7064"
          , "p4s4tabTlink": "Royal Decree Law 8/2014 of July 4"
          }
        ]
      },
      {
        "p4s4tabT": "Paid internships"
        , "p4s4tabTtitle": "Truths and myths about paid and unpaid internships"
        , "p4s4tabTd": [
          {
          "p4s4tabTdesc": "The obligation to remunerate a scholar or not depends on the national legal framework where the practices are carried out. In the particular case of Spain, companies are not obliged to offer compensation to interns in companies. However, in countries like France, there is a regulation that indicates that a minimum monthly remuneration."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          }
        ]
      }
    ]
  },
  "es":{
    "p4s4title": "Información importante para la realización de trámites en la contratación de un becario"
    , "p4s4desc": "Se recomienda conocer la normativa sobre prácticas externas, los tipos de prácticas y todos los requisitos para procedes a la contratación de un becario. De esta manera se podrá tener entendimiento de todo el proceso y así se cumplirá con las obligaciones establecidas para el estudiante dentro de la práctica en la empresa."
    , "p4s4tab": [
      {
        "p4s4tabT": "Tipos de prácticas"
        , "p4s4tabTtitle": "Hay dos tipos de prácticas externas: las curriculares y las extracurriculares"
        , "p4s4tabTd": [
          {
          "p4s4tabTdesc": "Las prácticas externas curriculares son aquellas que forman parte del plan de estudios, de carácter obligatorio y que poseen cierta cantidad de créditos. Su carga académica es importante, ya que de ellas depende que se apruebe el año académico. "
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "Las prácticas externas extracurriculares o no curriculares, son aquellas que realiza el becario por voluntad, bajo ningún tipo de obligación."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          }
        ]
      },
      {
        "p4s4tabT": "Requisitos para tener un becario"
        , "p4s4tabTtitle": "Requisitos para tener un estudiante de prácticas en empresas como becario"
        , "p4s4tabTd": [
          {
          "p4s4tabTdesc": "Las prácticas en empresas buscan dar al estudiante la experiencia del mundo laboral a través del contacto directo con la empresa y su entorno, todo dentro de una dinámica de aprendizaje y aplicación de los conocimientos obtenidos en la formación académica."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "Para esto, el estudiante debe cumplir con una serie de requisitos para poder adquirir el puesto de becario dentro de la empresa:"
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "– El becario debe ser un estudiante universitario, con aprobación de su casa de estudio para la firma del convenio."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "– Todas las tareas asignadas al becario deben estar relacionadas con lo que el mismo ha visto durante su formación académica."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          }
        ]
      },
      {
        "p4s4tabT": "Derechos y obligaciones"
        , "p4s4tabTtitle": "Derechos y obligaciones durante las prácticas profesionales"
        , "p4s4tabTd": [
          {
          "p4s4tabTdesc": "– Los becarios deben disponer de un tutor académico dentro de la casa de estudios que pueda orientarle durante las prácticas."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "– Los becarios deben disponer de un tutor en la empresa que se encargue de guiarle, evaluarlo y formarlo durante el desarrollo de la práctica."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "– Uno de los aspectos más importantes es instruir al becario en relación a los riesgos laborales y normativas internas de la empresa, e incluso sobre la Ley de protección de datos."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "– La empresa debe ser flexible con el estudiante y respetar su carga académica y deberes con la universidad."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          },
          {
          "p4s4tabTdesc": "– El convenio de prácticas no establece una relación laboral, por lo que no indica obligaciones y derechos propios del marco laboral para ninguna de sus partes involucradas."
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
          }
        ]
      },
      {
        "p4s4tabT": "Normativa vigente"
        , "p4s4tabTtitle": "Conozca los tres Decretos que regulan las prácticas externas"
        , "p4s4tabTd": [
          {
          "p4s4tabTdesc": ": Inclusión de los estudiantes de prácticas en empresas en el régimen de la Seguridad Social."
          , "p4s4tabTurl": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2011-16819"
          , "p4s4tabTlink": "Real Decreto 1493/2011 del 24 de octubre"
          },
          {
          "p4s4tabTdesc": ": Regulación de prácticas académicas externas de los estudiantes universitarios."
          , "p4s4tabTurl": "https://www.boe.es/buscar/doc.php?id=BOE-A-2014-8138"
          , "p4s4tabTlink": "Real Decreto 592/14 de 11 de julio"
          },
          {
          "p4s4tabTdesc": ": Medidas urgentes para el crecimiento, la competitividad y la eficiencia."
          , "p4s4tabTurl": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2014-7064"
          , "p4s4tabTlink": "Real Decreto Ley 8/2014 de 4 de julio"
          }
        ]
      },
      {
        "p4s4tabT": "Prácticas remuneradas"
        , "p4s4tabTtitle": "Verdades y mitos sobre las prácticas remuneradas y no remuneradas"
        , "p4s4tabTd": [
          {
          "p4s4tabTdesc": "La obligación de remunerar o no a un becario depende del marco legal nacional donde se realicen las prácticas. En el caso particular de España, las empresas no están en obligación de ofrecer una remuneración a los becarios de prácticas en empresas. Sin embargo, en países como Francia, sí existe una normativa que indica que debe existir una remuneración mínima mensual. "
          , "p4s4tabTurl": ""
          , "p4s4tabTlink": ""
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
      tabIndex: 0
    }
  },
  computed: {
    p4s4tab() {
      return this.$t("p4s4tab");
    }
  }
};
</script>
