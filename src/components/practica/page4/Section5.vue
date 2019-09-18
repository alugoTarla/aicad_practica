<template>
  <div id="section5">
    <div class="fondoWhite">
      <b-container fluid>
        <b-container>
          <br />
          <h2>{{$t("p4s5title")}}</h2>
          <br />
          <b-row>
            <b-col md="6" sm="12" v-for="(item ,idx) in p4s5items" :key="idx">
              <h3><strong>{{item.p4s5ititle}}</strong></h3>
              <div v-if="item.p4s5ilistF" style="padding: 0 2rem">
                <ul style="padding-bottom: 0">
                  <li v-for="(item1 ,idx1) in item.p4s5ilists" :key="idx1">{{item1}}</li>
                </ul>
              </div>
              <p class="text-justify">{{item.p4s5idesc}}</p>
              <br />
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<i18n>
{
  "en":{
    "p4s5title":
      "Frequently asked questions about the contributions to social security",
    "p4s5items": [
      {
        "p4s5ititle":
          "Do fellows with an internship agreement in Spain have to contribute to social security?",
        "p4s5ilistF": false,
        "p4s5ilists": [],
        "p4s5idesc":
          "Only external practices that are remunerated or that provide financial aid are the ones that obligate the intern to contribute to social security during the period established in the internship agreement."
      },
      {
        "p4s5ititle":
          "How much does the social security contribution of an internship in companies cost?",
        "p4s5ilistF": false,
        "p4s5ilists": [],
        "p4s5idesc":
          "The basic contribution for internship students is the one established by the General Regime for training contracts. It is usually around 50 euros to share between the student and the company. This amount is fixed and does not depend on the amount of the financial aid or the duration of the internship."
      },
      {
        "p4s5ititle":
          "The requirements for a scholarship holder to contribute to social security in Spain are:",
        "p4s5ilistF": true,
        "p4s5ilists": [
          "Have an external, curricular or extracurricular internship agreement."
          ,"Financial aid or compensation for the intern."
          ,"A national ID: DNI, passport or NIE."
          ,"A Spanish social security contribution number."
        ],
        "p4s5idesc":
          "If the intern meets these requirements and the company discharges the intern, he will benefit from Social Security benefits such as, for example, the contribution to retirement and the coverage of common contingencies (those that apply for disability and temporary disability for common illness or occupational accidents)."
      },
      {
        "p4s5ititle":
          "How to subsidize the social security contribution of students with an internship agreement?",
        "p4s5ilistF": false,
        "p4s5ilists": [],
        "p4s5idesc":
          "In the case of external curricular internships, the social security contribution will have a 100% bonus if the company decides to remunerate the student and if assuming procedures ensured by competent administration."
      }
    ]
  },
  "es":{
    "p4s5title":
      "Preguntas frecuentes sobre la cotización de becarios a la seguridad social",
    "p4s5items": [
      {
        "p4s5ititle":
          "¿Tienen que cotizar a la seguridad social los becarios con convenio de prácticas en España?",
        "p4s5ilistF": false,
        "p4s5ilists": [],
        "p4s5idesc":
          "Solo las prácticas externas que sean remuneradas o que brinden bolsas de ayuda serán las que generan la obligación de cotizar a la seguridad social durante el período establecido en el convenio de prácticas"
      },
      {
        "p4s5ititle":
          "¿Cuánto cuesta la cotización a la seguridad social de un becario de prácticas en empresas?",
        "p4s5ilistF": false,
        "p4s5ilists": [],
        "p4s5idesc":
          "La base de cotización para los estudiantes de prácticas en empresas es la que establece el Régimen General para los contratos de formación. Suele rondar los 50 euros a distribuir entre el estudiante y la empresa. Esta cifra es fija y no depende del monto de la bolsa de ayuda, la duración de las prácticas."
      },
      {
        "p4s5ititle":
          "Los requisitos para que un becario deba cotizar a la seguridad social en España son:",
        "p4s5ilistF": true,
        "p4s5ilists": [
          "Disponer de un convenio de prácticas externas, curricular o extracurricular."
          ,"Una bolsa de ayuda o remuneración para el estudiante de prácticas."
          ,"Una identificación nacional: DNI, pasaporte o NIE."
          ,"Un número de cotización a la seguridad social española."
        ],
        "p4s5idesc":
          "Si el becario cumple con estos requisitos y la empresa da de alta al becario, éste se beneficiará de prestaciones propias de la Seguridad Social como por ejemplo, la aportación a la jubilación y las coberturas de contingencias comunes (las que aplican por invalidez e incapacidad temporal por enfermedad común o accidentes laborales)."
      },
      {
        "p4s5ititle":
          "¿Cómo bonificar la cotización a la seguridad social de estudiantes con convenio de prácticas?",
        "p4s5ilistF": false,
        "p4s5ilists": [],
        "p4s5idesc":
          "Mientras se trate de prácticas externas curricularesla cotización a la seguridad social tendrá una bonificación del 100% si la empresa decide remunerar al estudiante y supone supone la bonificación de los importes mediante el trámite dispuesto por la administración competente."
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
    p4s5items() {
      return this.$t("p4s5items");
    }
  }
};
</script>
