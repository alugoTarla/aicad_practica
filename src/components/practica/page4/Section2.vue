<template>
  <div id="section2">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <br />
          <b-row>
            <b-col sm="12" md="12" lg="8">
              <h2>{{$t("p4s2Title")}}</h2>
              <br>
              <b-row>
                <b-col 
                cols="12"
                v-for="(item ,idx) of p4s2sub"
                    :key="idx">
                  <h3>{{item.p4s2subtitle}}</h3>
                  <p class="text-justify">
                    {{item.p4s2descript}}
                  </p>
                  <br>
                </b-col>
              </b-row>
            </b-col>
            <b-col sm="12" md="12" lg="4">
              <b-card no-body class="p4card" footer-tag="footer">
                <b-card-title class="p4cardtitle">
                  {{$t("p4s2Title1")}}
                </b-card-title>
                <b-card-body class="p4cardbody">
                  <ul style="margin-bottom: 0">
                    <li v-for="(item ,idx) of p4s2items"
                    :key="idx">
                      {{item}}
                    </li>
                  </ul>
                </b-card-body>
                <b-card-footer class="p4cardfooter text-center">
                  <div>
                    <a :href="p4_1s1buttonUrl" class="btn buttonTurqueza">
                      {{$t("p4_1s1button")}}
                    </a>
                  </div>
                  <br>
                </b-card-footer>
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
    "p4s2Title": "Tell us more about yourself and we will help you choose the best place to grow professionally",
    "p4s2sub": [
      {
        "p4s2subtitle": "What is an internship agreement in companies?",
        "p4s2descript":
          "The internship agreement in companies or internship contract, is a document signed by three parties: the university student, a company and the student's study center, as part of the fulfillment of the career curriculum and helping the students to make better use of their academic training."
      },
      {
        "p4s2subtitle": "Is there a unique model of internship agreement?",
        "p4s2descript":
          "There is no single format for the internship agreement in companies. Normally, universities have their own format, although the structure and content are usually similar having slight variations."
      },
      {
        "p4s2subtitle": "What is the duration of internships?",
        "p4s2descript":
          "The duration of the internship agreement may very in accordance with the academic calendar, academic activities and the needs of the students. However, the duration of the internships is usually between 1 and 6 months, and can be part-time or full-time."
      }
    ],
    "p4s2Title1": "WHAT DOES OUR ADVISORY SERVICE INCLUDE?",
    "p4s2items": [
      "Processing of the internship agreement."
      ,"Social security applicable to interns."
      ,"Bonificación de cotizaciones de becarios."
      ,"Internship contributions bonus."
      ,"Compulsory documentation to do an internship in companies."
      ,"Agreements of foreign universities."
      ,"Insurance for university internship."
    ],
    "p4_1s1button": "Contact us"
  },
  "es":{
    "p4s2Title": "Cuéntanos más sobre ti y te ayudaremos a elegir el mejor puesto para crecer profesionalmente",
    "p4s2sub": [
      {
        "p4s2subtitle": "¿Qué es un convenio de prácticas en empresas?",
        "p4s2descript":
          "El convenio de prácticas en empresas o contrato de becario, es un documento que firman tres partes: el estudiante universitario, una empresa y el centro de estudios del estudiante, como parte del cumplimiento del plan de estudios de la carrera y para que dicho estudiante se integre a un equipo de trabajo como aprendiz y haciendo uso de su formación académica."
      },
      {
        "p4s2subtitle": "¿Hay un modelo único de convenio de prácticas en empresas?",
        "p4s2descript":
          "No existe un formato único para el convenio de prácticas en empresas. Normalmente, las universidades disponen de su propio formato, aunque la estructura y el contenido suelen ser similares, solo con ligeras variaciones que no las diferencias demasiado."
      },
      {
        "p4s2subtitle": "¿Cuál es la duración de las prácticas en empresas?",
        "p4s2descript":
          "La duración del convenio de prácticas en empresas va a variar según el calendario académico, las actividades académicas e incluso las necesidades de los estudiantes. Sin embargo, un período de prácticas en empresas suele durar entre 1 y 6 meses, y pueden tener una jornada parcial, partida o completa."
      }
    ],
    "p4s2Title1": "¿EN QUÉ CONSISTE NUESTRO SERVICIO DE ASESORÍA?",
    "p4s2items": [
      "Tramitación del convenio de prácticas en empresas."
      ,"Seguridad social aplicable a becarios."
      ,"Bonificación de cotizaciones de becarios."
      ,"Documentación obligatoria para hacer unas prácticas en empresas."
      ,"Convenios de universidades extranjeras."
      ,"Seguros para prácticas universitarias."
    ],
    "p4_1s1button": "Contáctanos"
  }
}
</i18n>

<script>
export default {
  data() {
    return {
      p4_1s1buttonUrl: "#"
    }
  },
  computed: {
    p4s2sub() {
      return this.$t("p4s2sub");
    },
    p4s2items() {
      return this.$t("p4s2items");
    }
  }
};
</script>
